import React from "react";
import "tailwindcss/tailwind.css";
import {
  FaBrain,
  FaShieldAlt,
  FaVrCardboard,
  FaNetworkWired,
  FaBolt,
  FaDna,
} from "react-icons/fa";

const cardInfo = [
  {
    id: "1",
    icon: <FaBrain />,
    head: "Advanced Poker AI",
    paragraph:
      "Interface directly with our advanced AI using cutting-edge neural technology.",
    iconColor: "text-red-500",
  },
  {
    id: "2",
    icon: <FaShieldAlt />,
    head: "Secure Transactions",
    paragraph:
      "Ensure secure transactions with our advanced quantum encryption protocols.",
    iconColor: "text-pink-500",
  },
  {
    id: "3",
    icon: <FaVrCardboard />,
    head: "Virtual Reality Poker",
    paragraph: "Experience poker in immersive 3D virtual reality environments.",
    iconColor: "text-purple-500",
  },
  {
    id: "4",
    icon: <FaNetworkWired />,
    head: "Fast & Reliable Network",
    paragraph:
      "Enjoy seamless poker gameplay with our high-speed nano-network infrastructure.",
    iconColor: "text-green-400",
  },
  {
    id: "5",
    icon: <FaBolt />,
    head: "Powerful Servers",
    paragraph:
      "Access poker games powered by state-of-the-art fusion reactor servers.",
    iconColor: "text-yellow-400",
  },
  {
    id: "6",
    icon: <FaDna />,
    head: "Biometric Authentication",
    paragraph:
      "Secure your account with biometric authentication and advanced AI protections.",
    iconColor: "text-red-500",
  },
];

export default function Feature() {
  return (
    <section className="pt-20 pb-10 relative overflow-hidden max-w-7xl mx-auto">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {cardInfo.map((item) => (
            <div
              className="feature-card p-6 floating"
              style={{ animationDelay: "0.5s" }}
              key={item.id}
            >
              <div className={`text-5xl mb-4 ${item.iconColor} feature-icon`}>
                {item.icon}
              </div>
              <h3 className="text-2xl font-bold mb-2">{item.head}</h3>
              <p className="text-gray-300">{item.paragraph}</p>
            </div>
          ))}
        </div>
      </div>
      <style jsx>{`
        @keyframes neon-pulse {
          0%,
          100% {
            text-shadow: 0 0 5px #fff, 0 0 10px #fff, 0 0 15px #fff,
              0 0 20px #00ffff, 0 0 35px #00ffff, 0 0 40px #00ffff,
              0 0 50px #00ffff, 0 0 75px #00ffff;
          }
          50% {
            text-shadow: 0 0 2px #fff, 0 0 5px #fff, 0 0 7px #fff,
              0 0 10px #00ffff, 0 0 17px #00ffff, 0 0 20px #00ffff,
              0 0 25px #00ffff, 0 0 37px #00ffff;
          }
        }

        .neon-text {
          animation: neon-pulse 1.5s infinite alternate;
        }

        @keyframes gradient {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }

        .feature-card {
          backdrop-filter: blur(10px);
          background-color: rgba(0, 0, 0, 0.5);
          border: 1px solid rgba(0, 255, 255, 0.1);
          transition: all 0.3s ease;
        }

        .feature-card:hover {
          transform: translateY(-10px) scale(1.05);
          box-shadow: 0 0 20px rgba(0, 255, 255, 0.5);
        }

        .feature-icon {
          transition: all 0.3s ease;
        }

        .feature-card:hover .feature-icon {
          transform: rotate(360deg) scale(1.2);
        }

        @keyframes float {
          0%,
          100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-20px);
          }
        }

        .floating {
          animation: float 6s ease-in-out infinite;
        }

        .glitch-effect {
          position: relative;
          overflow: hidden;
        }

        .glitch-effect::before,
        .glitch-effect::after {
          content: attr(data-text);
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: rgba(0, 0, 0, 0.5);
        }

        .glitch-effect::before {
          left: 2px;
          text-shadow: -2px 0 #ff00de;
          clip: rect(24px, 550px, 90px, 0);
          animation: glitch-anim 3s infinite linear alternate-reverse;
        }

        .glitch-effect::after {
          left: -2px;
          text-shadow: -2px 0 #00ffff;
          clip: rect(85px, 550px, 140px, 0);
          animation: glitch-anim 2s infinite linear alternate-reverse;
        }

        @keyframes glitch-anim {
          0% {
            clip: rect(39px, 9999px, 71px, 0);
          }
          20% {
            clip: rect(3px, 9999px, 5px, 0);
          }
          40% {
            clip: rect(6px, 9999px, 38px, 0);
          }
          60% {
            clip: rect(13px, 9999px, 43px, 0);
          }
          80% {
            clip: rect(44px, 9999px, 93px, 0);
          }
          100% {
            clip: rect(54px, 9999px, 47px, 0);
          }
        }
      `}</style>
    </section>
  );
}
