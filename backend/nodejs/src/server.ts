import app from "./app"

const server = app.listen(app.get("port"), () => {
    console.log(
        "🔥 API is running at %s://%s:%d in %s environment",
        app.get("scheme"),
        app.get("host"),
        app.get("port"),
        app.get("env")
    );
    console.log("  Press CTRL-C to stop\n")
})

export default server
