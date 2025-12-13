import React from "react";

function Footer() {
  return (
    <footer className="m-10 text-xs text-[#737373] text-center">

      {/* Languages */}
      <div className="flex flex-wrap justify-center gap-x-2 gap-y-1">
        <a className="text-[#385898] hover:underline cursor-pointer">English (US)</a>
        <a className="hover:underline cursor-pointer">Español</a>
        <a className="hover:underline cursor-pointer">Português (Brasil)</a>
        <a className="hover:underline cursor-pointer">Français (France)</a>
        <a className="hover:underline cursor-pointer">Deutsch</a>
        <a className="hover:underline cursor-pointer">Italiano</a>
        <a className="hover:underline cursor-pointer">العربية</a>
        <a className="hover:underline cursor-pointer">中文(简体)</a>
        <span>›</span>
      </div>

      {/* Divider */}
      <hr className="my-2 border-gray-300 max-w-4xl mx-auto" />

      {/* Footer Links */}
      <div className="flex flex-wrap justify-center gap-x-2 gap-y-1">
        <span>Facebook © 2010</span>
        <span>·</span>
        <a className="text-[#385898] hover:underline cursor-pointer">Mobile</a>
        <span>·</span>
        <a className="text-[#385898] hover:underline cursor-pointer">Find Friends</a>
        <span>·</span>
        <a className="text-[#385898] hover:underline cursor-pointer">Badges</a>
        <span>·</span>
        <a className="text-[#385898] hover:underline cursor-pointer">Careers</a>
        <span>·</span>
        <a className="text-[#385898] hover:underline cursor-pointer">About</a>
        <span>·</span>
        <a className="text-[#385898] hover:underline cursor-pointer">Advertising</a>
        <span>·</span>
        <a className="text-[#385898] hover:underline cursor-pointer">Developers</a>
        <span>·</span>
        <a className="text-[#385898] hover:underline cursor-pointer">Privacy</a>
        <span>·</span>
        <a className="text-[#385898] hover:underline cursor-pointer">Terms</a>
        <span>·</span>
        <a className="text-[#385898] hover:underline cursor-pointer">Help</a>
      </div>

    </footer>
  );
}

export default Footer;
