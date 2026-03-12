import { 
  LayoutGrid, 
  Heart, 
  Clock, 
  Calendar, 
  BookOpen, 
  Shield 
} from "lucide-react";

// Category icons using Lucide (premium icons)
export const categoryIcons = {
  "Semua": LayoutGrid,
  "Kesehatan & BPJS": Heart,
  "Lembur & Kompensasi": Clock,
  "Cuti & Absensi": Calendar,
  "Pengembangan Diri": BookOpen,
  "Kode Etik": Shield,
};

// Category colors (PREFACE Red theme)
export const categoryColors = {
  "Kesehatan & BPJS": "#E31E24",    // PREFACE Red
  "Lembur & Kompensasi": "#E31E24", // PREFACE Red
  "Cuti & Absensi": "#E31E24",      // PREFACE Red
  "Pengembangan Diri": "#E31E24",   // PREFACE Red
  "Kode Etik": "#E31E24",           // PREFACE Red
};

export const getCategoryIcon = (categoryName) => {
  return categoryIcons[categoryName] || LayoutGrid;
};

export const getCategoryColor = (categoryName) => {
  return categoryColors[categoryName] || "#E31E24";
};
