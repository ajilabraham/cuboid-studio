import React, { useEffect, useState, useRef } from 'react';

// Define the Locations
const LOCATIONS = [
    {
        id: 'canada',
        name: 'Cuboid Studio Canada',
        lat: 43.583847,
        lng: -79.644185,
        address: 'Unit 40, 3883 Quartz Rd, Mississauga, ON L5B 0M4',
        phone: '+1 (416) 555-0198',
        email: 'canada@cuboidstudio.com',
    },
    {
        id: 'dubai',
        name: 'Cuboid Studio Dubai',
        lat: 25.317017,
        lng: 55.345453,
        address: 'Level 14, Boulevard Plaza Tower 1, Downtown Dubai',
        phone: '+971 4 555 0199',
        email: 'dubai@cuboidstudio.com',
    }
];

const ContactMap = () => {
    const [selectedLocation, setSelectedLocation] = useState(LOCATIONS[0]);
    const [isMounted, setIsMounted] = useState(false);
    const mapRef = useRef<any>(null);

    useEffect(() => {
        // We need to wait for custom elements to be defined before we can interact with them
        const initMap = async () => {
            // The gmp-map-3d element is defined when the Maps JS API loads
            if (typeof window !== 'undefined' && customElements.get('gmp-map-3d')) {
                // It's already defined
            }
        };
        initMap();
    }, []);

    const handleLocationSelect = async (loc: typeof LOCATIONS[0]) => {
        setSelectedLocation(loc);

        // Animate camera to the new location
        if (mapRef.current) {
            const gmpMap3d = mapRef.current;
            if (typeof gmpMap3d.flyCameraTo === 'function') {
                gmpMap3d.flyCameraTo({
                    endCamera: {
                        center: { lat: loc.lat, lng: loc.lng, altitude: 0 },
                        tilt: 45,
                        range: 1000,
                        heading: 0,
                    },
                    durationMillis: 2000,
                });
            }
        }
    };

    return (
        <div className="h-full flex flex-col bg-black border border-white/5 relative" suppressHydrationWarning>
            {/* 3D Map Container */}
            <div className="flex-1 w-full bg-[#121212] relative overflow-hidden min-h-[400px]">
                {/* We use React's dangerouslySetInnerHTML combined with custom elements or just write it normally 
            if the TS types ignore it, but since `<gmp-map-3d>` is a custom element, React 19 supports it nicely.
            However, we need to pass a string or style safely. */}
                {React.createElement(
                    'gmp-map-3d',
                    {
                        ref: mapRef,
                        center: `${selectedLocation.lat},${selectedLocation.lng},0`,
                        tilt: "45",
                        range: "1000",
                        "default-labels-disabled": true,
                        style: { width: '100%', height: '100%', display: 'block' }
                    },
                    LOCATIONS.map(loc =>
                        React.createElement('gmp-map-3d-marker', {
                            key: loc.id,
                            position: `${loc.lat},${loc.lng},0`
                        })
                    )
                )}
            </div>

            {/* Location Details Overlay / Section */}
            <div className="bg-[#121212] p-8 md:p-12 border-t border-white/5">
                <div className="flex gap-4 mb-8">
                    {LOCATIONS.map(loc => (
                        <button
                            key={loc.id}
                            onClick={() => handleLocationSelect(loc)}
                            className={`px-6 py-3 font-bold text-xs uppercase tracking-widest transition-all ${selectedLocation.id === loc.id
                                ? 'bg-[#FFB800] text-black'
                                : 'bg-black text-white hover:bg-white/10 border border-white/10'
                                }`}
                        >
                            {loc.name.replace('Cuboid Studio ', '')}
                        </button>
                    ))}
                </div>

                <div>
                    <h4 className="text-3xl font-serif mb-4 text-white uppercase">{selectedLocation.name}</h4>
                    <div className="space-y-4 text-gray-400 font-light">
                        <div className="flex items-start gap-4">
                            <span className="text-[#FFB800] font-bold mt-1 text-sm">⚲</span>
                            <p className="max-w-xs">{selectedLocation.address}</p>
                        </div>
                        <div className="flex items-center gap-4">
                            <span className="text-[#FFB800] font-bold text-sm">☏</span>
                            <a href={`tel:${selectedLocation.phone}`} className="hover:text-white transition-colors">{selectedLocation.phone}</a>
                        </div>
                        <div className="flex items-center gap-4">
                            <span className="text-[#FFB800] font-bold text-sm">✉</span>
                            <a href={`mailto:${selectedLocation.email}`} className="hover:text-white transition-colors text-sm border-b border-transparent hover:border-[#FFB800]">{selectedLocation.email}</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactMap;
