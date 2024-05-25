import React from "react";
import Layout from "@/src/components/Layout";
import Button from "@/src/components/Button";
import Input from "@/src/components/Input";
import { useComponentLogic } from "./hooks";
import styles from "./Login.module.css";
import { REG_EXP } from "@/src/constants/regexp";
const Login = () => {
  const { register, handleSubmit, onSubmit, errors } =
    useComponentLogic();

  return (
    <Layout noFooter>
      <div className={styles.section}>
        <div className={styles.fromWrapper}>
          <p className="text-heading-3 font-label font-extrabold">Masuk</p>
          <div className="flex mt-3">
            <p className="text-heading-5 font-semibold font-gray-50">
              Belum punya akun?
            </p>
            <a
              href="/src/container/Login"
              className="text-heading-5 text-blue-100 font-semibold ml-2 hover:underline"
            >
              Daftar disini
            </a>
          </div>
          <form
            className="flex flex-col mt-8"
            onSubmit={handleSubmit(onSubmit)}
          >
            <Input
              register={register}
              errors={errors}
              required={{ value: true, message: "Alamat email harus di isi." }}
              pattern={{
                value: REG_EXP.email,
                message: "Gunakan format email dengan benar",
              }}
              label="Email"
              type="email"
              name="email"
              placeholder="Masukkan alamat email"
              className="mb-6"
            />
            <Input
              register={register}
              errors={errors}
              required={{ value: true, message: "Password harus di isi." }}
              label="Kata sandi"
              type="password"
              name="password"
              placeholder="Masukkan kata sandi"
            />
            <a
              href="/src/container/Home"
              className="text-heading-5 text-blue-100 font-semibold ml-2 hover:underline"
            >
              Lupa kata sandi?
            </a>
            <Button type="submit" fullWidth>
              {" "}
              Masuk{" "}
            </Button>
          </form>
          <p className="text-heading-5 text-gray-70 my-8">Atau masuk dengan</p>
          <Button variant="google" className="mb-8">
            Masuk dengan Google
          </Button>
          <Button variant="facebook" className="mb-8">
            Masuk dengan Facebook
          </Button>
        </div>
      </div>
    </Layout>
  );
};

export default Login;
