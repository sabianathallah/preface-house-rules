import { 
  LayoutGrid, 
  Heart, 
  Clock, 
  Calendar, 
  Shield,
  Link,
  Info,
  AlertTriangle,
  Building2
} from "lucide-react";

// Category icons using Lucide (premium icons)
export const categoryIcons = {
  "Semua": LayoutGrid,
  "Kesehatan & BPJS": Heart,
  "Lembur & Kompensasi": Clock,
  "Cuti & Absensi": Calendar,
  "Kode Etik": Shield,
  "Formulir & Link": Link,
  "Informasi & Pengumuman": Info,
  "Aturan Disiplin": AlertTriangle,
  "Profil Perusahaan": Building2,
};

// Category colors (PREFACE Red theme)
export const categoryColors = {
  "Kesehatan & BPJS": "#E31E24",    // PREFACE Red
  "Lembur & Kompensasi": "#E31E24", // PREFACE Red
  "Cuti & Absensi": "#E31E24",      // PREFACE Red
  "Kode Etik": "#E31E24",           // PREFACE Red
  "Formulir & Link": "#E31E24",     // PREFACE Red
  "Informasi & Pengumuman": "#E31E24", // PREFACE Red
  "Aturan Disiplin": "#E31E24",     // PREFACE Red
  "Profil Perusahaan": "#8b5cf6",   // Purple
};

export const getCategoryIcon = (categoryName) => {
  return categoryIcons[categoryName] || LayoutGrid;
};

export const getCategoryColor = (categoryName) => {
  return categoryColors[categoryName] || "#E31E24";
};
