export function Footer() {
  return (
    <div className="border-t border-tertiary/20 text-center pt-6 pb-8 flex flex-col gap-2 mt-30">
      <div className="text-secondary/60 dark:text-neutral flex gap-2 mx-auto [&>a:hover]:underline [&>a:hover]:text-tertiary/60 dark:[&>a:hover]:text-secondary transition-colors">
        <a href="#" className="">
          Privacy Policy
        </a>
        <a href="#" className="">
          Terms of Excellence
        </a>
        <a href="#" className="">
          Sponsors
        </a>
      </div>
      <span className="text-primary/90">
        &copy;2026 MKSU Creators Awards. All rights reserved
      </span>
    </div>
  );
}
