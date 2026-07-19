Telegram.WebApp.ready();

let saldo = Number(localStorage.getItem("saldo")) || 0;

const balance = document.getElementById("balance");
balance.innerText = "Rp " + saldo.toLocaleString("id-ID");

const AdController = window.Adsgram.init({
  blockId: "38922"
});

document.getElementById("showAd").onclick = () => {

  AdController.show()
    .then(() => {

      saldo += 500;

      localStorage.setItem("saldo", saldo);

      balance.innerText = "Rp " + saldo.toLocaleString("id-ID");

      alert("Selamat! Kamu mendapat Rp500");

    })
    .catch(() => {

      alert("Iklan belum selesai atau gagal dimuat.");

    });

};
