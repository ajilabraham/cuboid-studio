import React, { useEffect, useState, useRef } from 'react';

// Define the Locations
const LOCATIONS = [
    {
        id: 'canada',
        name: 'Country Lab Interiors, Canada',
        lat: 43.583847,
        lng: -79.644185,
        address: 'Unit 40, 3883 Quartz Rd, Mississauga, ON L5B 0M4',
        phone: '+1 (416) 555-0198',
        email: 'canada@countrylabinteriors.com',
    },
    {
        id: 'dubai',
        name: 'Country Lab Interiors, Dubai',
        lat: 25.317017,
        lng: 55.345453,
        address: 'Level 14, Boulevard Plaza Tower 1, Downtown Dubai',
        phone: '+971 4 555 0199',
        email: 'dubai@countrylabinteriors.com',
    }
];

const ContactMap = () => {
    const [selectedLocation, setSelectedLocation] = useState(LOCATIONS[0]);
    const mapRef = useRef<any>(null);
    const animationFrameRef = useRef<number | null>(null);
    const isInteractingRef = useRef<boolean>(false);
    const currentHeadingRef = useRef<number>(0);
    const animationSequenceIdRef = useRef<number>(0);

    const [isMapLoaded, setIsMapLoaded] = useState(false);

    useEffect(() => {
        // Wait for custom elements to be defined before interaction
        const initMap = async () => {
            if (typeof window !== 'undefined') {
                await window.customElements.whenDefined('gmp-map-3d');
                setIsMapLoaded(true);
            }
        };
        initMap();

        // Cleanup the animation frame on unmount
        return () => {
            if (animationFrameRef.current) {
                cancelAnimationFrame(animationFrameRef.current);
            }
        };
    }, []);

    // Start the auto-rotation loop
    useEffect(() => {
        const rotateGlobe = () => {
            if (!mapRef.current) {
                animationFrameRef.current = requestAnimationFrame(rotateGlobe);
                return;
            }

            // Only rotate if the user is not actively interacting with the globe, and the property exists
            if (!isInteractingRef.current && mapRef.current && typeof mapRef.current.heading !== 'undefined') {
                currentHeadingRef.current += 0.05; // Adjust rotation speed here

                // Keep heading within 0-360 range to prevent extremely large numbers
                if (currentHeadingRef.current >= 360) {
                    currentHeadingRef.current -= 360;
                }

                // Apply heading directly to the map property to bypass flyCameraTo interpolation
                try {
                    mapRef.current.heading = currentHeadingRef.current;
                } catch (err) {
                    // Silently fail if the Google Maps Web Component hasn't initialized its setters yet
                }
            }

            animationFrameRef.current = requestAnimationFrame(rotateGlobe);
        };

        // Start animation loop
        animationFrameRef.current = requestAnimationFrame(rotateGlobe);

        return () => {
            if (animationFrameRef.current) {
                cancelAnimationFrame(animationFrameRef.current);
            }
        };
    }, []);

    const handleLocationSelect = (loc: typeof LOCATIONS[0]) => {
        setSelectedLocation(loc);

        if (mapRef.current) {
            const gmpMap3d = mapRef.current;
            currentHeadingRef.current = 0;

            // Cancel any ongoing sequence by incrementing the ID
            const currentSeq = ++animationSequenceIdRef.current;

            if (typeof gmpMap3d.flyCameraTo === 'function') {
                isInteractingRef.current = true; // Pause auto-rotation

                const runStep = (fn: () => void, delay: number) => {
                    setTimeout(() => {
                        // Only execute if sequence hasn't been interrupted by user interaction
                        if (animationSequenceIdRef.current === currentSeq) {
                            fn();
                        }
                    }, delay);
                };

                // 1) Smoothly rotate 360 from space (Range 20,000,000)
                gmpMap3d.flyCameraTo({
                    endCamera: { center: { lat: loc.lat, lng: loc.lng, altitude: 0 }, tilt: 0, range: 20000000, heading: 360 },
                    durationMillis: 3000,
                });

                // 2) Smooth zoom to district level
                runStep(() => {
                    gmpMap3d.flyCameraTo({
                        endCamera: { center: { lat: loc.lat, lng: loc.lng, altitude: 0 }, tilt: 45, range: 6000, heading: 0 },
                        durationMillis: 3500,
                    });
                }, 3000);

                // 3) Wait 1 second (3000 + 3500 + 1000 = 7500ms), then Birds Eye View
                runStep(() => {
                    gmpMap3d.flyCameraTo({
                        endCamera: { center: { lat: loc.lat, lng: loc.lng, altitude: 0 }, tilt: 60, range: 1000, heading: 45 },
                        durationMillis: 3000,
                    });
                }, 7500);

                // 4) Resume auto-rotation
                runStep(() => {
                    currentHeadingRef.current = 45; // Sync heading
                    isInteractingRef.current = false;
                }, 10500); // 7500 + 3000
            }
        }
    };

    // Trigger initial fly-in animation from space
    useEffect(() => {
        if (isMapLoaded && mapRef.current) {
            // Slight delay so the user actually sees the full globe before the camera moves
            const timer = setTimeout(() => {
                handleLocationSelect(selectedLocation);
            }, 1500);
            return () => clearTimeout(timer);
        }
    }, [isMapLoaded]);

    return (
        <div className="w-full h-full bg-[#050505] relative" suppressHydrationWarning>
            {/* 3D Map Container */}
            <div
                className="w-full h-full absolute inset-0 cursor-grab active:cursor-grabbing"
                onPointerDown={() => {
                    isInteractingRef.current = true;
                    animationSequenceIdRef.current += 1; // Cancel fly-in sequence if user interacts
                }}
                onPointerUp={() => {
                    // Add a slight delay before resuming rotation feeling natural
                    setTimeout(() => { isInteractingRef.current = false; }, 1500);
                }}
                onPointerLeave={() => { isInteractingRef.current = false; }}
            >
                {/* 
                  Since React 19 natively supports Custom Elements, but TypeScript might not know about them, 
                  we use React.createElement to bypass strict JSX compilation errors while successfully injecting the component. 
                */}
                {isMapLoaded ? React.createElement(
                    'gmp-map-3d',
                    {
                        ref: mapRef,
                        center: { lat: selectedLocation.lat, lng: selectedLocation.lng, altitude: 0 },
                        tilt: 0, // Start looking flat down for a globe view
                        heading: 0,
                        range: 20000000, // 20,000km starting range to show full Earth
                        mode: 'HYBRID', // Required by recent API updates to avoid infinite spinner
                        defaultUIHidden: false, // Ensure controls are visible/expanded by default
                        "default-labels-disabled": false,
                        style: { width: '100%', height: '100%', display: 'block' }
                    },
                    LOCATIONS.flatMap(loc => [
                        // Custom red extrusion line
                        React.createElement('gmp-polyline-3d', {
                            key: `line-${loc.id}`,
                            altitudeMode: 'RELATIVE_TO_GROUND',
                            strokeColor: '#ea4335',
                            strokeWidth: 6,
                            drawsOccludedSegments: true, // Always visible through 3D meshes
                            coordinates: [
                                { lat: loc.lat, lng: loc.lng, altitude: 400 },
                                { lat: loc.lat, lng: loc.lng, altitude: 0 }
                            ]
                        }),
                        // Google Pin at the top
                        React.createElement('gmp-marker-3d', {
                            key: loc.id,
                            position: { lat: loc.lat, lng: loc.lng, altitude: 400 },
                            altitudeMode: 'RELATIVE_TO_GROUND',
                            extruded: false, // Turn off native grey extrusion
                            color: '#ea4335' // Standard Google pin red
                        })
                    ])
                ) : (
                    <div className="w-full h-full flex items-center justify-center bg-[#121212] border border-white/5 animate-pulse">
                        <p className="text-[#FFB800] uppercase font-bold tracking-widest text-sm text-center">Loading 3D Map Lab...</p>
                    </div>
                )}
            </div>

            {/* Location Navigation Overlay (Bottom Right) */}
            <div className="absolute bottom-12 right-6 md:right-12 z-30 flex flex-col items-end pointer-events-none">
                <div className="flex gap-2 mb-4 pointer-events-auto">
                    {LOCATIONS.map(loc => (
                        <button
                            key={loc.id}
                            onClick={() => handleLocationSelect(loc)}
                            className={`px-4 py-2 font-bold text-[10px] md:text-xs uppercase tracking-widest transition-all rounded-sm backdrop-blur-md ${selectedLocation.id === loc.id
                                ? 'bg-[#FFB800] text-black shadow-[0_0_15px_rgba(255,184,0,0.5)]'
                                : 'bg-black/50 text-white hover:bg-white/20 border border-white/20'
                                }`}
                        >
                            {loc.name.replace('Country Lab Interiors, ', '')}
                        </button>
                    ))}
                </div>

                <div className="bg-black/40 backdrop-blur-md border border-white/10 p-6 rounded-sm text-right pointer-events-auto max-w-sm">
                    <h4 className="text-xl font-serif text-white uppercase drop-shadow-md">{selectedLocation.name}</h4>
                    <p className="text-gray-300 font-light text-sm mt-2">{selectedLocation.address}</p>
                    <div className="flex flex-col gap-1 mt-3 text-sm">
                        <a href={`tel:${selectedLocation.phone}`} className="text-[#FFB800] hover:text-white transition-colors">{selectedLocation.phone}</a>
                        <a href={`mailto:${selectedLocation.email}`} className="text-gray-400 hover:text-white transition-colors">{selectedLocation.email}</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactMap;
