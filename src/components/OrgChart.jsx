import React from 'react';
import { ChevronDown } from 'lucide-react';

export const OrgChart = () => {
  return (
    <div className="w-full bg-gradient-to-b from-slate-50 to-white p-8 rounded-lg">
      <h2 className="text-3xl font-bold text-center mb-8 text-slate-800">
        Struktur Organisasi PREFACE
      </h2>
      
      <div className="flex justify-center mb-8">
        <div className="text-center">
          <div className="bg-white border-2 border-slate-800 rounded px-6 py-4 font-semibold text-sm inline-block">
            <p className="font-bold mb-2">BOARD OF DIRECTORS (BOD)</p>
            <p className="text-slate-600">M. Akbar Fadillah</p>
          </div>
        </div>
      </div>

      {/* Vertical line from BOD */}
      <div className="flex justify-center">
        <div className="w-1 h-8 bg-slate-400"></div>
      </div>

      {/* Three Main Divisions */}
      <div className="grid grid-cols-3 gap-8 mb-12">
        {/* Corporate Support Division */}
        <div className="flex flex-col items-center">
          <div className="bg-white border-2 border-slate-800 rounded px-4 py-3 font-semibold text-sm text-center mb-4 w-full">
            <p className="font-bold mb-1">CORPORATE SUPPORT DIVISION</p>
            <p className="text-sm text-slate-600">AND LEAD OF BOD</p>
          </div>

          {/* Vertical line */}
          <div className="w-1 h-6 bg-slate-400 mb-4"></div>

          {/* Finance and HR Units */}
          <div className="grid grid-cols-2 gap-4 w-full">
            {/* Finance Unit */}
            <div className="flex flex-col items-center">
              <div className="bg-slate-100 border border-slate-600 rounded px-3 py-2 text-xs text-center mb-2 w-full">
                <p className="font-semibold mb-1">Finance Unit</p>
                <p className="text-slate-600 text-xs">Jihad Wisnu B</p>
              </div>
            </div>

            {/* HR, GA, PR Unit */}
            <div className="flex flex-col items-center">
              <div className="bg-slate-100 border border-slate-600 rounded px-3 py-2 text-xs text-center mb-2 w-full">
                <p className="font-semibold mb-1">HR, GA, and PR Unit</p>
                <p className="text-slate-600 text-xs">M Sabian Athallah</p>
              </div>
            </div>
          </div>

          {/* Secretary Unit below */}
          <div className="w-full h-4"></div>
          <div className="bg-slate-100 border border-slate-600 rounded px-3 py-2 text-xs text-center w-full">
            <p className="font-semibold mb-1">Secretary Unit</p>
            <p className="text-slate-600 text-xs">Azzahra Adellia</p>
          </div>
        </div>

        {/* Product & Creative Division */}
        <div className="flex flex-col items-center">
          <div className="bg-white border-2 border-slate-800 rounded px-4 py-3 font-semibold text-sm text-center mb-4 w-full">
            <p className="font-bold">PRODUCT & CREATIVE</p>
            <p className="font-bold">DIVISION</p>
            <p className="text-sm text-slate-600 mt-2">Albir Lukmansyah</p>
          </div>

          {/* Vertical line */}
          <div className="w-1 h-6 bg-slate-400 mb-4"></div>

          {/* Sub units */}
          <div className="space-y-3 w-full">
            {/* Creative Unit */}
            <div className="bg-slate-100 border border-slate-600 rounded px-3 py-2 text-xs text-center">
              <p className="font-semibold mb-1">Creative Unit</p>
              <p className="text-slate-600 text-xs">M Ariz Adani</p>
            </div>

            {/* Product Development Unit */}
            <div className="bg-slate-100 border border-slate-600 rounded px-3 py-2 text-xs text-center">
              <p className="font-semibold mb-1">Product Development Unit</p>
              <p className="text-slate-600 text-xs">M Wafi Athallah</p>
            </div>

            {/* Marketing Unit */}
            <div className="bg-slate-100 border border-slate-600 rounded px-3 py-2 text-xs text-center">
              <p className="font-semibold mb-1">Marketing Unit</p>
              <p className="text-slate-600 text-xs">Dimyati</p>
            </div>
          </div>
        </div>

        {/* Operations Division */}
        <div className="flex flex-col items-center">
          <div className="bg-white border-2 border-slate-800 rounded px-4 py-3 font-semibold text-sm text-center mb-4 w-full">
            <p className="font-bold mb-1">OPERATIONS DIVISION</p>
            <p className="text-sm text-slate-600">M Wafi Athallah</p>
          </div>

          {/* Vertical line */}
          <div className="w-1 h-6 bg-slate-400 mb-4"></div>

          {/* Sub units */}
          <div className="space-y-3 w-full">
            {/* Operational Unit */}
            <div className="bg-slate-100 border border-slate-600 rounded px-3 py-2 text-xs text-center">
              <p className="font-semibold mb-1">Operational Unit</p>
              <p className="text-slate-600 text-xs">Rayfanza Harsa T</p>
            </div>

            {/* Production Unit */}
            <div className="bg-slate-100 border border-slate-600 rounded px-3 py-2 text-xs text-center">
              <p className="font-semibold mb-1">Production Unit</p>
              <p className="text-slate-600 text-xs">Biana Rizky N</p>
            </div>

            {/* Support Unit */}
            <div className="bg-slate-100 border border-slate-600 rounded px-3 py-2 text-xs text-center">
              <p className="font-semibold mb-1">Support Unit</p>
              <p className="text-slate-600 text-xs">Dimyati</p>
            </div>
          </div>
        </div>
      </div>

      {/* Legend */}
      <div className="mt-12 pt-8 border-t border-slate-200">
        <p className="text-center text-slate-600 text-sm">
          <span className="font-semibold">Catatan:</span> Struktur organisasi PREFACE dirancang untuk mendukung kolaborasi lintas divisi dan efisiensi operasional.
        </p>
      </div>
    </div>
  );
};

export default OrgChart;
