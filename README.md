
# Express.js Image Fetching API

This API provides endpoints to fetch images of foxes and cities from the Pixabay API. The images are streamed directly from Pixabay and served as responses.

## Getting Started

### Installation

1. Clone the repository:

   ```bash
   git clone <your-repo-url>
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Create a `.env` file in the root directory and add your Pixabay API key:

   ```bash
   PIXABAY_API_KEY=your_pixabay_api_key
   ```

4. Start the server:

   ```bash
   node server.js
   ```

The server will be running on `http://localhost:3000`.

## Endpoints

### 1. `/fox`

#### Method: GET

This endpoint fetches and streams an image of a fox from Pixabay.

#### Example Request:

```bash
GET http://localhost:3000/fox
```

#### Response:

- **Content-Type:** Varies based on the image type (e.g., `image/jpeg`, `image/png`)
- **Body:** The binary data of the fox image.

#### Possible Errors:

- `500 Internal Server Error`: If there is an issue fetching the image from Pixabay.

---

### 2. `/city`

#### Method: GET

This endpoint fetches and streams an image of a city from Pixabay.

#### Example Request:

```bash
GET http://localhost:3000/city
```

#### Response:

- **Content-Type:** Varies based on the image type (e.g., `image/jpeg`, `image/png`)
- **Body:** The binary data of the city image.

#### Possible Errors:

- `500 Internal Server Error`: If there is an issue fetching the image from Pixabay.

## Environment Variables

- `PIXABAY_API_KEY`: Your Pixabay API key, required to access the Pixabay API.

## Dependencies

- [Express](https://expressjs.com/): Fast, unopinionated, minimalist web framework for Node.js.
- [Axios](https://axios-http.com/): Promise-based HTTP client for the browser and Node.js.
- [dotenv](https://github.com/motdotla/dotenv): Loads environment variables from a `.env` file into `process.env`.
