import React from "react";
import Layout from "@/src/components/Layout";
import Button from "@/src/components/Button";
import styles from "./Login.module.css";
function Login() {
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
              href="#"
              className="text-heading-5 text-blue-100 font-semibold ml-2 hover:underline"
            >
              Daftar disini
            </a>
          </div>
          <form className="flex flex-col mt-8">
            <input type="email"></input>
            <input type="password"></input>
            <Button> Masuk </Button>
          </form>
        </div>
      </div>
    </Layout>
  );
}

export default Login;
