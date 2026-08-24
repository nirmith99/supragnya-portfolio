"use client";

import React from "react";
import { 
    LayoutDashboard, 
    Package, 
    ShoppingCart, 
    ArrowLeftRight, 
    TrendingUp, 
    Search,
    Store,
    Layers
} from "lucide-react";

export default function RetailDashboardPreview() {
    return (
        <div className="w-full bg-[#1e231e] text-[#F4F1EA] font-sans text-xs p-3 md:p-5 select-none">
            {/* Top Bar */}
            <div className="flex items-center justify-between pb-3 border-b border-[#3A4038] gap-2">
                <div className="flex items-center gap-2">
                    <div className="w-6 h-6 rounded-md bg-[var(--accent-gold)]/20 border border-[var(--accent-gold)]/40 flex items-center justify-center text-[var(--accent-gold)]">
                        <Store className="w-3.5 h-3.5" />
                    </div>
                    <div>
                        <div className="font-semibold text-xs text-[#F4F1EA] flex items-center gap-1.5">
                            Retail Manager
                            <span className="text-[9px] px-1.5 py-0.5 rounded bg-emerald-500/20 text-emerald-400 font-mono">Live Multi-Store</span>
                        </div>
                    </div>
                </div>

                <div className="hidden sm:flex items-center gap-2 bg-[#2B302A] px-2.5 py-1 rounded-md border border-[#3A4038] text-[11px] text-[#A6A29A]">
                    <Search className="w-3 h-3" />
                    <span>Search SKU, barcode, order...</span>
                </div>

                <div className="flex items-center gap-2 text-[10px] font-mono text-[#D1BFA0]">
                    <span>Outlet: 01-Flagship</span>
                </div>
            </div>

            {/* Main Area */}
            <div className="grid grid-cols-12 gap-3 pt-3">
                {/* Mini Sidebar */}
                <div className="col-span-3 hidden md:flex flex-col gap-1 pr-2 border-r border-[#3A4038]/60 text-[11px] text-[#A6A29A]">
                    <div className="flex items-center gap-2 px-2 py-1.5 rounded bg-[var(--accent-gold)]/10 text-[var(--accent-gold)] font-medium">
                        <LayoutDashboard className="w-3.5 h-3.5" />
                        <span>Overview</span>
                    </div>
                    <div className="flex items-center gap-2 px-2 py-1.5 rounded hover:bg-[#2B302A] transition-colors">
                        <Package className="w-3.5 h-3.5" />
                        <span>Inventory (2.4k)</span>
                    </div>
                    <div className="flex items-center gap-2 px-2 py-1.5 rounded hover:bg-[#2B302A] transition-colors">
                        <ShoppingCart className="w-3.5 h-3.5" />
                        <span>POS Register</span>
                    </div>
                    <div className="flex items-center gap-2 px-2 py-1.5 rounded hover:bg-[#2B302A] transition-colors">
                        <ArrowLeftRight className="w-3.5 h-3.5" />
                        <span>Stock Transfer</span>
                    </div>
                    <div className="flex items-center gap-2 px-2 py-1.5 rounded hover:bg-[#2B302A] transition-colors">
                        <TrendingUp className="w-3.5 h-3.5" />
                        <span>Analytics</span>
                    </div>
                </div>

                {/* Dashboard Center */}
                <div className="col-span-12 md:col-span-9 space-y-3">
                    {/* Stat Badges */}
                    <div className="grid grid-cols-3 gap-2">
                        <div className="bg-[#2B302A] p-2.5 rounded-lg border border-[#3A4038]">
                            <div className="text-[10px] text-[#A6A29A] uppercase tracking-wider font-mono">Today&apos;s GMV</div>
                            <div className="text-sm sm:text-base font-bold text-[#F4F1EA] font-serif mt-0.5">₹1,48,290</div>
                            <div className="text-[9px] text-emerald-400 font-mono mt-0.5">↑ 18.4% vs avg</div>
                        </div>
                        <div className="bg-[#2B302A] p-2.5 rounded-lg border border-[#3A4038]">
                            <div className="text-[10px] text-[#A6A29A] uppercase tracking-wider font-mono">Low Stock</div>
                            <div className="text-sm sm:text-base font-bold text-[#f59e0b] font-serif mt-0.5">12 SKUs</div>
                            <div className="text-[9px] text-[#f59e0b] font-mono mt-0.5">Auto-reorder queued</div>
                        </div>
                        <div className="bg-[#2B302A] p-2.5 rounded-lg border border-[#3A4038]">
                            <div className="text-[10px] text-[#A6A29A] uppercase tracking-wider font-mono">Sync Health</div>
                            <div className="text-sm sm:text-base font-bold text-emerald-400 font-serif mt-0.5">99.8%</div>
                            <div className="text-[9px] text-[#A6A29A] font-mono mt-0.5">4 stores connected</div>
                        </div>
                    </div>

                    {/* Stock Velocity & Live Orders Table */}
                    <div className="bg-[#2B302A] p-3 rounded-lg border border-[#3A4038] space-y-2">
                        <div className="flex items-center justify-between text-[11px] font-semibold text-[#F4F1EA]">
                            <span className="flex items-center gap-1.5">
                                <Layers className="w-3 h-3 text-[var(--accent-gold)]" />
                                Real-Time Multi-Outlet Inventory
                            </span>
                            <span className="text-[10px] text-[var(--accent-gold)] font-mono">Updated 2s ago</span>
                        </div>

                        <div className="space-y-1.5 pt-1">
                            <div className="flex items-center justify-between p-1.5 rounded bg-[#1e231e] border border-[#3A4038]/50 text-[10px] sm:text-[11px]">
                                <div className="flex items-center gap-2">
                                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
                                    <span className="font-medium text-[#F4F1EA]">SKU-9042 · Linen Overshirt (M)</span>
                                </div>
                                <div className="flex items-center gap-3 font-mono text-[10px]">
                                    <span className="text-[#A6A29A]">Main: 42 in stock</span>
                                    <span className="text-emerald-400">POS Ready</span>
                                </div>
                            </div>

                            <div className="flex items-center justify-between p-1.5 rounded bg-[#1e231e] border border-[#3A4038]/50 text-[10px] sm:text-[11px]">
                                <div className="flex items-center gap-2">
                                    <span className="w-1.5 h-1.5 rounded-full bg-[#f59e0b]"></span>
                                    <span className="font-medium text-[#F4F1EA]">SKU-3120 · Leather Crossbody Bag</span>
                                </div>
                                <div className="flex items-center gap-3 font-mono text-[10px]">
                                    <span className="text-[#f59e0b]">Low: 3 left</span>
                                    <span className="text-[var(--accent-gold)]">Transfer req</span>
                                </div>
                            </div>

                            <div className="flex items-center justify-between p-1.5 rounded bg-[#1e231e] border border-[#3A4038]/50 text-[10px] sm:text-[11px]">
                                <div className="flex items-center gap-2">
                                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
                                    <span className="font-medium text-[#F4F1EA]">SKU-7718 · Wool Knit Cardigan</span>
                                </div>
                                <div className="flex items-center gap-3 font-mono text-[10px]">
                                    <span className="text-[#A6A29A]">Main: 88 in stock</span>
                                    <span className="text-emerald-400">Synced</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
