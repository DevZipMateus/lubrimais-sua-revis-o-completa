import { useEffect } from "react";
import Header from "@/components/Header";

const Vitrine = () => {
  // Hide MonteSite badge on this page
  useEffect(() => {
    const badge = document.getElementById("montesite-footer-badge");
    if (badge) badge.style.display = "none";
    return () => {
      if (badge) badge.style.display = "";
    };
  }, []);

  return (
    <div className="h-screen overflow-hidden flex flex-col">
      <Header />
      <main className="flex-1 mt-[80px]" style={{ height: "calc(100vh - 80px)" }}>
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
