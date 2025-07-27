const DASHBOARD_CONTENT = {
  FEATURE_LIST: [
    {
      title: "Dashbaord",
      url: "/dashboard",
    },
    {
      title: "Manajemen Sistem",
      url: "",
      submenus: [
        {
          title: "Manajemen Akun",
          url: "/dashboard/system-management/account",
        },
        { title: "Pengaturan", url: "/dashboard/system-management/setting" },
      ],
    },
    {
      title: "Manajemen Aset",
      url: "/dashboard/aset-management",
    },
    {
      title: "Manajemen Kegiatan",
      url: "/dashboard/activity-management",
    },
    {
      title: "Manajemen Konten",
      url: "/dashboard/content-management",
    },
  ],
  DATA_KEUANGAN: [
    {
      title: "Pemasukan",
      value: "RP. 275.000",
    },
    {
      title: "Pengeluaran",
      value: "RP. 175.000",
    },
    {
      title: "Total",
      value: "RP. 100.000",
    },
  ],
  DATA_ASET: [
    {
      item: "AC",
      kategori: "Baik",
      value: "6",
    },
    {
      item: "Karpet",
      kategori: "Baik",
      value: "15",
    },
  ],
};

export default DASHBOARD_CONTENT;
