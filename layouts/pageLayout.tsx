function PageLayout({children}: { children: any }) {
  return (
    <>
      <main className="mt-20 w-10/12 sm:w-8/12 lg:w-6/12 mx-auto">
        {children}
      </main>
    </>
  );
}

export default PageLayout;
