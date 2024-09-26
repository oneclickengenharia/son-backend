import server from "./server";

server.listen(process.env.PORT, () => {
    console.log(`started server http://localhost:${process.env.PORT}`);
});
