import Image from "next/image";

export const AuthLayout = ({ children }) => {
  return (
    <main className="grid grid-cols-2 h-screen">
      <div className="bg-grey-main flex justify-center items-center">
        <Image
          src="/delivery.svg"
          width={500}
          height={500}
          alt="Login Register Image"
        />
      </div>
      <div className="bg-black-main flex justify-center items-center auth-page">
        <section className="w-3/4">{children}</section>
      </div>
    </main>
  );
};
