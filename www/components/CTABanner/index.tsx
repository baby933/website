import { Button, Typography } from "@supabase/ui";

const CTABanner = (props: any) => {
  const { darkerBg } = props;
  return (
    <div
      className={`
        py-32 grid grid-cols-12 gap-4 items-center text-center bg-gray-500 border-t dark:border-gray-600
        ${darkerBg ? "dark:bg-gray-500" : ""} px-16
      `}
    >
      <div className="col-span-12">
        <Typography.Title level={2}>
          <span style={{ color: "#bbbbbb" }}>
            Ready to engage your clients{" "}
          </span>
          <span style={{ color: "#ffffff" }}> better, faster?</span>
        </Typography.Title>
        <Typography.Title level={4}>
          Try us out to start building for free.
        </Typography.Title>
      </div>
      <div className="col-span-12 mt-4">
        <a href="https://console.fonoster.io">
          <Button size="medium">Get Started</Button>
        </a>
      </div>
    </div>
  );
};

export default CTABanner;
