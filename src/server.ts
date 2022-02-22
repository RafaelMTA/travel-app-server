import "dotenv/config";
import "./database";
import app from "./app";

const port = process.env.PORT || 4000;

app.listen(port, () => {
    console.log(`Started at PORT: ${port}`);
});