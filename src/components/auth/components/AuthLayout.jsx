export const AuthLayout = ({ children }) => {
  return (
    <main className="grid grid-cols-2 h-screen">
      <div className="bg-blue-500" />
      <div className="flex justify-center items-center ">
        <section className="w-3/4">{children}</section>
      </div>
    </main>
  );
};
