const axios = require("axios");

const BASE_URL = "https://ktpm-temkiv.cloud/login.php";

describe("TEST API LOGIN", () => {

    test("Đăng nhập thành công → 200", async () => {
        const res = await axios.post(BASE_URL, {
            username: "admin_01",
            password: "Admin@123"
        });

        expect(res.status).toBe(200);
        expect(res.data.success).toBe(true);
    });

});
