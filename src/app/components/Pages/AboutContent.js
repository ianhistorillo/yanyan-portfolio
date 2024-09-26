"use client";

import React from "react";
import Image from "next/image";

const AboutContent = () => {
  return (
    <div className="i-col40 i-fr i-pd-top-10">
      <div className="ianimage-container">
        <div className="ianimage-outer-wrapper">
          <div className="ianimage-inner-wrapper">
            <Image
              src={`https://public.boxcloud.com/api/2.0/internal_files/1649441392127/versions/1814233427327/representations/jpg_paged_2048x2048/content/1.jpg?access_token=1!3h4lWVr_XGiY9EzVas_2YeuR2J3AfU1_qDKA9RhLhBrWq_AJbHHUp-vYNq629iTsxxuTZEup5ZAWq1SfwWjG2aXVLQGxmbKH9gz4UKFsjrUlbr4mYErscjWXunuFH7qpv0ztohu_Y0J4OzkitcvzP92nxdug330vxl6btj7YNZoFMHbdEvGo5Ts1A6dgUT6tSwz3ieHxhgJpfdqOLV4SKeA2Ct28KBvrsP_GXOljFgcXgG85W10LLrkfx2OEppUO56Uu5PeugL9fZbXmNLy-Sv-FIwcRjCe6IxObI4YghzBNIjFsQxBZ05dNU15iqabj9ZxXCdYyTSUztem08ATJly9ZBrdU6q0ECC0Sm7u-xX2wOq5SFLkStx1Ej6p5pHUlnvjNXSMPLaJR5Fey21BKLDayuUKB1fix5bnFosAW3b4vroT9ojUVtYzhGqV3Ji4WxKm6V5AJefo69Scz_9lakA6QSmEGzJtfEHVLW2h4twWI-tavQbmjw_Ry2Ow3zwCsOJTL1Sa39W6H26eq_bKQeY3-CNB_I-ZJxFptpem8D8jhrjN10XZqzzx0wfKXRmLRqMelYMwWWt1l2GC9zChpoVug7XJcM4v4bRZG1QcBpUVo5AqmlxPdi-wuOZlTMwkv7N3eU0hZF3qtfpt78g3ENiXWdQVgVEe8oRbLHGlnsD9hk_MLuoeZPjOE15g48TGmcWPqnzWIZANgDYFaBnXKdssFDHU.&box_client_name=box-content-preview&box_client_version=2.109.0`}
              width={1000}
              height={1000}
              alt="Picture of the author"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutContent;
