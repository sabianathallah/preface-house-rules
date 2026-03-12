export const lemburKompensasiPolicies = [
  {
    id: 3,
    category: "Lembur & Kompensasi",
    categoryColor: "#f59e0b",
    title: "Klaim Overtime (Lembur)",
    lastUpdated: "15 Mar 2025",
    tags: ["Lembur", "Overtime", "Kompensasi"],
    summary: "Prosedur pengajuan dan perhitungan kompensasi kerja lembur.",
    content: `**Definisi Lembur**
Kerja melebihi 8 jam/hari atau 40 jam/minggu, atau kerja di hari libur/weekend.

**Syarat Lembur**
1. Ada persetujuan tertulis dari manager langsung (minimal 1 hari sebelumnya)
2. Dikerjakan untuk kebutuhan project/deadline yang mendesak
3. Maksimal 4 jam/hari dan 18 jam/minggu (sesuai UU Ketenagakerjaan)

**Perhitungan Kompensasi**
- Lembur hari kerja (jam ke-1): 1.5x upah per jam
- Lembur hari kerja (jam ke-2 dst): 2x upah per jam
- Lembur hari libur nasional: 2x (7 jam pertama), 3x (jam ke-8), 4x (jam ke-9+)

*Upah per jam = Gaji bulanan / 173*

**Cara Klaim**
1. Minta approval lembur via Slack ke manager (#overtime-request)
2. Catat jam mulai & selesai di sistem absensi
3. Submit klaim di portal HR sebelum tanggal 20
4. Dibayarkan bersamaan gaji bulan berjalan`,
  },
  {
    id: 4,
    category: "Lembur & Kompensasi",
    categoryColor: "#f59e0b",
    title: "Tunjangan Transportasi & Makan",
    lastUpdated: "1 Jan 2025",
    tags: ["Tunjangan", "Transport", "Makan"],
    summary: "Ketentuan tunjangan harian untuk karyawan.",
    content: `**Tunjangan Makan**
Rp 30.000/hari kerja (masuk kantor). Tidak berlaku untuk WFH.

**Tunjangan Transportasi**
Rp 20.000/hari kerja (masuk kantor). Tidak berlaku untuk WFH.

**Tunjangan WFH**
Rp 15.000/hari saat WFH (untuk internet/listrik).

**Catatan Penting**
- Dihitung berdasarkan kehadiran aktual per bulan
- Tidak ada penggantian jika tidak masuk tanpa keterangan
- Cuti tahunan tetap dihitung sebagai hari kerja untuk tunjangan`,
  },
];
