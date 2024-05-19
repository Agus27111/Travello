import React from "react";
import Layout from "@/src/components/Layout";
import Button from "@/src/components/Button";
import Input from "@/src/components/Input";
import styles from "./Login.module.css";
const Login = () => {
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
          <form className="flex flex-col mt-8">
            <Input
              label="Email"
              type="email"
              name="email"
              placeholder="Masukkan alamat email"
              className="mb-6"
            />
            <Input
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
            <Button> Masuk </Button>
          </form>
        </div>
      </div>
    </Layout>
  );
};

export default Login;
