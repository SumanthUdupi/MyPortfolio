import React from 'react';

const WornWoodenDeskBackground: React.FC = () => {
  return (
    <div className="absolute inset-0 -z-10 overflow-hidden">
      <style>{`
        @keyframes floatDust {
          0%, 100% { transform: translateY(0px) translateX(0px); opacity: 0.3; }
          25% { transform: translateY(-10px) translateX(5px); opacity: 0.5; }
          50% { transform: translateY(-20px) translateX(-5px); opacity: 0.3; }
          75% { transform: translateY(-10px) translateX(5px); opacity: 0.5; }
        }
        @keyframes colorShift {
          0%, 100% { filter: hue-rotate(0deg); }
          50% { filter: hue-rotate(5deg); }
        }
        .dust-particle {
          animation: floatDust 20s infinite ease-in-out;
          will-change: transform, opacity;
        }
        .color-shift {
          animation: colorShift 30s infinite ease-in-out;
        }
      `}</style>

      {/* Base layer with enhanced color palette */}
      <div className="relative w-full h-full bg-gradient-to-br from-amber-800 via-yellow-900 to-amber-950 opacity-90 color-shift parallax-layer" data-parallax-speed="-0.02">
        {/* Layer 1: Base wood color with richer tones */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#8B4513] via-[#A0522D] to-[#D2691E] opacity-70 parallax-layer" data-parallax-speed="-0.03"></div>

        {/* Layer 2: Sun-bleached patches with asymmetry */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-white/15 to-transparent mix-blend-screen opacity-60 parallax-layer" data-parallax-speed="-0.04"></div>

        {/* Layer 3: Darker worn areas with blend mode */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,_var(--tw-gradient-stops))] from-black/20 to-transparent mix-blend-multiply opacity-50 parallax-layer" data-parallax-speed="-0.05"></div>

        {/* Layer 4: Enhanced wood grain texture */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=\'50\' height=\'50\' viewBox=\'0 0 50 50\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'%23000000\' fill-opacity=\'0.08\' fill-rule=\'evenodd\'%3E%3Cpath d=\'M0 25 Q12.5 0 25 25 T50 25 Q37.5 50 25 25 T0 25 Z\'/%3E%3C/g%3E%3C/svg%3E')] opacity-10 mix-blend-overlay parallax-layer" data-parallax-speed="-0.06"></div>

        {/* Layer 5: Water stains with organic chaos */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=\'150\' height=\'150\' viewBox=\'0 0 150 150\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cellipse cx=\'75\' cy=\'75\' rx=\'60\' ry=\'40\' stroke=\'%23000000\' stroke-opacity=\'0.06\' fill=\'none\' stroke-width=\'3\'/%3E%3Cellipse cx=\'75\' cy=\'75\' rx=\'45\' ry=\'30\' stroke=\'%23000000\' stroke-opacity=\'0.04\' fill=\'none\' stroke-width=\'2\'/%3E%3Cellipse cx=\'75\' cy=\'75\' rx=\'30\' ry=\'20\' stroke=\'%23000000\' stroke-opacity=\'0.02\' fill=\'none\' stroke-width=\'1\'/%3E%3C/svg%3E')] bg-repeat opacity-40 mix-blend-multiply parallax-layer" data-parallax-speed="-0.07"></div>

        {/* Layer 6: Ink stains with asymmetry */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=\'250\' height=\'250\' viewBox=\'0 0 250 250\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cpath d=\'M 20 20 Q 50 10 80 20 T 140 20 Q 170 10 200 20 T 230 20 Q 250 10 250 40 Q 260 70 240 90 Q 250 120 230 140 Q 250 170 230 190 Q 250 220 230 230 Q 210 240 190 230 T 140 230 Q 120 240 100 230 T 40 230 Q 20 240 20 220 Q 30 200 40 190 Q 20 170 30 160 Q 20 140 30 130 Q 20 110 30 100 Q 20 80 30 70 Z\' fill=\'%23000000\' fill-opacity=\'0.03\'/%3E%3C/svg%3E')] bg-repeat opacity-50 mix-blend-darken parallax-layer" data-parallax-speed="-0.08"></div>

        {/* Layer 7: Scratches and imperfections */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=\'30\' height=\'30\' viewBox=\'0 0 30 30\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cpath d=\'M0 15 L30 10 M0 10 L30 15 M0 20 L30 25\' stroke=\'%23000000\' stroke-opacity=\'0.04\' stroke-width=\'0.8\'/%3E%3C/svg%3E')] bg-repeat opacity-25 mix-blend-overlay parallax-layer" data-parallax-speed="-0.09"></div>

        {/* Layer 8: Wood knots */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=\'100\' height=\'100\' viewBox=\'0 0 100 100\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Ccircle cx=\'50\' cy=\'50\' r=\'15\' fill=\'%23000000\' fill-opacity=\'0.1\'/%3E%3Ccircle cx=\'50\' cy=\'50\' r=\'10\' fill=\'%23FFFFFF\' fill-opacity=\'0.05\'/%3E%3C/svg%3E')] bg-repeat opacity-30 mix-blend-multiply parallax-layer" data-parallax-speed="-0.1"></div>

        {/* Layer 9: Varnish cracks */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=\'200\' height=\'200\' viewBox=\'0 0 200 200\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cpath d=\'M10 10 L190 190 M190 10 L10 190 M50 50 L150 150 M150 50 L50 150\' stroke=\'%23000000\' stroke-opacity=\'0.02\' stroke-width=\'0.5\'/%3E%3C/svg%3E')] bg-repeat opacity-20 mix-blend-overlay parallax-layer" data-parallax-speed="-0.11"></div>

        {/* Layer 10: Chips and dents */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=\'50\' height=\'50\' viewBox=\'0 0 50 50\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cpolygon points=\'10,10 40,10 25,40\' fill=\'%23000000\' fill-opacity=\'0.05\'/%3E%3C/svg%3E')] bg-repeat opacity-15 mix-blend-multiply parallax-layer" data-parallax-speed="-0.12"></div>

        {/* Layer 11: Aged patina for emotional resonance */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent mix-blend-color-dodge opacity-40 parallax-layer" data-parallax-speed="-0.13"></div>

        {/* Layer 12: Subtle shadows */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-black/5 to-transparent mix-blend-multiply opacity-30 parallax-layer" data-parallax-speed="-0.14"></div>

        {/* Animated dust particles */}
        <div className="absolute top-1/4 left-1/4 w-1 h-1 bg-white/20 rounded-full dust-particle" style={{ animationDelay: '0s' }}></div>
        <div className="absolute top-1/2 right-1/3 w-1 h-1 bg-white/15 rounded-full dust-particle" style={{ animationDelay: '5s' }}></div>
        <div className="absolute bottom-1/3 left-1/2 w-1 h-1 bg-white/25 rounded-full dust-particle" style={{ animationDelay: '10s' }}></div>
        <div className="absolute top-3/4 right-1/4 w-1 h-1 bg-white/18 rounded-full dust-particle" style={{ animationDelay: '15s' }}></div>
      </div>
    </div>
  );
};

export default WornWoodenDeskBackground;
