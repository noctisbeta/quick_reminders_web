import { NextPage } from "next/types";

const RegisterPage: NextPage = () => {
  return (
    <div className="grid grid-rows-5">
      <div className="row-start-3 grid grid-cols-3 items-center justify-center mt-auto">
        <div className="pb-6 gap-4 grid grid-rows-3 col-span-1 col-start-2 bg-blue-400 text-center rounded-md text-white shadow-2xl overflow-hidden">
          <h1>Register</h1>
          <input type="text" />
          <input type="text" />
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
