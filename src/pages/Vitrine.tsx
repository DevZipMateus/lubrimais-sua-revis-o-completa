import Header from "@/components/Header";

const Vitrine = () => {
  return (
    <div className="h-screen overflow-hidden flex flex-col">
      <Header />
      <main className="flex-1" style={{ marginTop: "80px", height: "calc(100vh - 80px - 63px)" }}>
        <iframe
          src="https://lubrimais.egestor.com.br/vitrine/"
          title="Demonstração de Vitrine"
          className="w-full h-full border-0"
          style={{ border: "none" }}
        />
      </main>
    </div>
  );
};

export default Vitrine;
