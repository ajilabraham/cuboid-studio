# Deploying Cuboid Studio to Google Cloud Run

Since you don't have the Google Cloud CLI (`gcloud`) or Docker installed locally, you can use the **Google Cloud Console** (web interface) to build and deploy your application.

## Prerequisites

1.  **Google Cloud Project**: Ensure you have an active project in the [Google Cloud Console](https://console.cloud.google.com/).
2.  **Billing**: Make sure billing is enabled for your project.
3.  **APIs**: Enable the **Cloud Build API** and **Cloud Run API**.

## Option 1: Deploy via Source (Easiest)

Google Cloud Run can automatically build your container using the `Dockerfile` we created.

1.  **Push your code** to a Git repository (GitHub, GitLab, or Bitbucket) if you haven't already.
2.  Go to the [Cloud Run Console](https://console.cloud.google.com/run).
3.  Click **Create Service**.
4.  Select **Continuously deploy new revisions from a source repository**.
5.  Click **Set up with Cloud Build**.
    *   Connect your repository provider (e.g., GitHub).
    *   Select your repository (`cuboid-scrolly` or similar).
    *   Click **Next** and **Save**.
6.  In **Build Configuration**:
    *   Select **Dockerfile** (it should autosense the file we created).
7.  In **Service Settings**:
    *   **Service Name**: `cuboid-studio` (or your preference).
    *   **Region**: Select a region close to your users (e.g., `us-central1`).
    *   **Authentication**: Select **Allow unauthenticated invocations** (this makes the site public).
8.  Expand **Container, Networking, Security**:
    *   **General** -> **Container Port**: Set to `3000`.
9.  Click **Create**.

Google Cloud will now build your application and deploy it. This may take a few minutes. Once done, you'll receive a public URL.

## Option 2: Deploy using Cloud Shell

If you prefer using a terminal but don't want to install tools locally, use the **Cloud Shell** (terminal in the browser).

1.  Open the [Google Cloud Console](https://console.cloud.google.com/).
2.  Click the **Activate Cloud Shell** icon (top right, looks like `>_`).
3.  Clone your repository:
    ```bash
    git clone https://github.com/your-username/your-repo.git
    cd your-repo
    ```
4.  Submit the build to Cloud Build:
    ```bash
    gcloud builds submit --tag gcr.io/PROJECT_ID/cuboid-studio
    ```
    *(Replace `PROJECT_ID` with your actual project ID)*
5.  Deploy to Cloud Run:
    ```bash
    gcloud run deploy cuboid-studio \
      --image gcr.io/PROJECT_ID/cuboid-studio \
      --platform managed \
      --region us-central1 \
      --allow-unauthenticated \
      --port 3000
    ```

## Troubleshooting

-   **Build Failures**: Check the Cloud Build logs in the console. Ensuring `next.config.ts` has `output: 'standalone'` is critical (we already did this!).
-   **Port Issues**: If the deploy fails with a timeout, ensure the Container Port is set to `3000` in the Cloud Run service settings.
