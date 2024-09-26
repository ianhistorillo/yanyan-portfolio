"use client";

import React from "react";
import Image from "next/image";
import {
  Link,
  Button,
  Element,
  Events,
  animateScroll as scroll,
  scrollSpy,
} from "react-scroll";

import Visit from "../Icons/Visit";

const ProjectContent = () => {
  return (
    <div className="i-col70 i-fr">
      <div id="projectsElement" className="content-page project-page">
        <div id="featured-projects">
          <a href="https://earthmeter.io/" target="_blank">
            <div className="featured-projects-container">
              <div className="featured-projects-image">
                <Image
                  src={`https://public.boxcloud.com/api/2.0/internal_files/1649453286192/versions/1814245503792/representations/png_paged_2048x2048/content/1.png?access_token=1!zBVtfmWcWlkeOJKxzsfOjPKie68prdiFriqhOSVo3TrHyFHvbVfJNLD4-Yqd8Bd_cBsMdByYRpqKPBHR39o0XHtsjeUZ88_jQ5yTKmIPz9BH_jq8ENH6WLNoKgfUgO9u74cKiVVzp1V4uRiMvaDjvegCVNbD4mPgRvykxo5hhgWew9Sb7_RxeHzin3s1yiMpK6J0uKPIToj5pPsg-zoq9sELiTN9qH7mlIUePpIMaAJqlHJ3o_HDT5VjcJhCp8uUzfhGfG3XPGhhw4yaHbOKdA-tVwgrOYbGa3JOzKS4JKTHtd8KXmAFC1YHoa3OBwGd5p71JQow1LDQBkTz-CP9FOqs_g9bGqEJYeBi_yx_LuYQNTxlU__Qufu6_n9Z0ax-nzOo_2M8845BnaMCKI3x-zrtQyMcAJxMCfSm9EqtQh5d3h4VmS4l4te2SfhngJipJdSjU3tI3atMLRp6BMrp8V_Fo9bsKN3vfyWaiiIwu_zsMJVNu1DJJmdauinO5ZBFMKkXTkDvQbTwgNTqAAsEn2t18oVXA0bFkNE08aaR93RCR9Z1jyQC0R19f9CcLz5LGV7y-S5fnwcsa4Owq34SUlka_FVuLf7bU3HBWb5utaT009bwYxr8aD8tIsOZtC02Ea10r5Tb3UVDRuluH4_YZkICLcV1rVssZIYpHL-eLWyBIdNFv95FfSgVIqSJQE1pGnQYJFqjTi0sFk6P65keekNIPQU.&box_client_name=box-content-preview&box_client_version=2.109.0`}
                  width={1000}
                  height={1000}
                  alt="Picture of the author"
                />
              </div>
              <div className="featured-projects-description">
                <span className="title"> Earthmeter.io </span>
                <p>
                  {" "}
                  At first look, this is only a simple responsive landing page,
                  but this is the first good landing page I've created. On this
                  project, I've learned how to used Typescript for the first
                  time and other tech.
                </p>

                <div className="featured-projects-stack">
                  <div className="other-projects-item"> Git@Github</div>
                  <div className="other-projects-item"> React </div>
                  <div className="other-projects-item"> Node </div>
                  <div className="other-projects-item"> TypeScript </div>
                </div>
              </div>
            </div>
          </a>
          <a href="https://tejnat.com" target="_blank">
            <div className="featured-projects-container">
              <div className="featured-projects-image">
                <Image
                  src={`https://public.boxcloud.com/api/2.0/internal_files/1649441994069/versions/1814233822869/representations/png_paged_2048x2048/content/1.png?access_token=1!K_7zC_kr5z5r7HnwW3xNv5Py1XWrFF3R2R1CTe2LOTPmR-Zi6Bwv4KdtNQ1UdiA-vk6-petVvXYElHLksLkwZ-Ch3RybEga0HI4jhTUm0di6g7J4SOTGz4RYqx0PXqcNoJNNWy1-dvJbDf7g4uYk5WixEQlPWaPDvM1hszZYZljIQhUEv1QKt1y-14YSYtrAWH_henntfBD8Tybx_c_nxjC8-WmZOxq8nYI_DcIvBYM4_CCl7Jm96QJvh9_Jn-Hb7VBB2g84wVG0uRbgCnefeht3Qz544FwJAVM3sjxOFFWCjYE_BPWdNh2BUer4Y60Y6TCn3zuKerWAfkSPdbzJoPuqm0BqqiATnok90ZluZCwNpq5Eg1TQnt_pVGFMe0l_hGKLbRtNF8Ffp_oVJph95pH3VA50OueSjz2dlOMsupAMoB0vI9vlEWUpLvfUDUiY3b1a-bDVHH3Ht2NefYAUD7IMf3HcZmzfsRJEgCXmQCZU5W9_-n9dA8yQ3ryOwpKmud5bXzCsMq7Iv9hb8CMtb7oDbMzMC67AygaCuCA3mcTgu3aaqeRW1qNf7emjKCs8oibVL1pBoAhWlCEmOwgR8g0x2SmIHkMj2VQcCl85o4NT5eCdeb44jh9Jx0sohxEcPNPmwUVL-4FA7cWgV8bGnSX5FNmBvm_z2vL6-RPr1PzzPka3CvTKyo-9pjDzp2GROZNEAeGOot3TC_84T0xPLrR-u9E.&box_client_name=box-content-preview&box_client_version=2.109.0`}
                  width={1000}
                  height={1000}
                  alt="Picture of the author"
                />
              </div>
              <div className="featured-projects-description">
                <span className="title"> EzPayPlus</span>
                <p>
                  {" "}
                  This project is a web based payroll system. This is the first
                  big project I've created during my junior years.
                </p>
                <p>
                  {" "}
                  This is featured because this is one of our main product and
                  many clients availed it.
                </p>
                <div className="featured-projects-stack">
                  <div className="other-projects-item"> Git@Github</div>
                  <div className="other-projects-item"> HTML </div>
                  <div className="other-projects-item"> PHP </div>
                  <div className="other-projects-item"> Javascript </div>
                </div>
              </div>
            </div>
          </a>

          <div className="featured-projects-container">
            <div className="featured-projects-image">
              <Image
                src={`https://public.boxcloud.com/api/2.0/internal_files/1649448042910/versions/1814239886110/representations/png_paged_2048x2048/content/1.png?access_token=1!VlHRrBrcEqjA80FEwcYUmjmQBfnSEtnWt_Yph-fal7Utw5xQHKzoLJMOqiAMI2qDBi0CdiYpdU2Mw6YDNdjzBwqbW2Y9sE3zMSkpIwxTFJnqkJtrAC1bCQBMx6Chq4poWYwD66d1S2PWojpqDbePVoI20qQ4l-HwROs0JLRBDYh0gsc8J8NDYG1YyyZrXh4uGJuesdM-4E08CIZdFr9sbAi7iMv2sOO_1lCHpmEJojAQLW6glgZHZy9iSqrdyVMFygfHqUOiKjoR_sIykhte6_lp7ZSi3X2IAk_wvi23urZj_sr2AvQEbEbXxAdCco5CWtyl3BVOBXzS0F-81ELV8eGwNgiqHh0HZR07qNTa17Y9YOpQ0ExM5srk0gkww4PunbvQLe8lSjJvEcwjXjj0lXRp3MQYBWRaEwLtcFjDAmQjKKCaIkTWnbL9yYM2-5TZCF-_z_YTOfpcoKtJG6QVJhO7z6NXZm5AFa5ePQRa37KD4QgTPnjdH4Ak0kfMD_3FqaspgXvKKWDpzYqMdelJmpjUeYrALLIXNocrDACxhYWZn_rtNVtZoPNjBPCeqqMGiM4imVfo4WWeKoazz9fRmKgLE8A5jn9UKjBjdHwIfFdTZlGVVKK48yXB1LYhPeDlq70m4MAJOCPjLagEt7uzj1KGUBxv316mLcGUDqWg2jB1LAKYMceIhWE4z4sjEdu6LNO35EfumZnJyKAUvTanA2hqf-w.&box_client_name=box-content-preview&box_client_version=2.109.0`}
                width={1000}
                height={1000}
                alt="Picture of the author"
              />
            </div>
            <div className="featured-projects-description">
              <span className="title"> Expense Tracker </span>
              <p>
                This mobile app is my first running project when I enter to the
                world of mobile development. In here, I showcase my experience
                on React and React Native, Expo and state management.
              </p>
              <div className="featured-projects-stack">
                <div className="other-projects-item"> Git@Github</div>
                <div className="other-projects-item"> React Native </div>
                <div className="other-projects-item"> Expo </div>
                <div className="other-projects-item"> Javascript </div>
                <div className="other-projects-item"> Redux </div>
              </div>
            </div>
          </div>
        </div>
        <div id="other-projects">
          <div className="other-projects-container">
            <div className="other-projects-header">
              {" "}
              Interactive Property Plans{" "}
            </div>
            <div className="other-projects-description">
              This is my current or latest projects I'm involved with - I am
              developing interactive property plans for villages, apartments,
              townhouses and etc. The app showcase the property details,
              downloadable brochures and even the real time map where the
              property currently located.
            </div>
            <div className="other-projects-stack">
              <div className="other-projects-item"> Git@Github </div>
              <div className="other-projects-item"> React </div>
              <div className="other-projects-item"> Javascript</div>
              <div className="other-projects-item"> Symfony </div>
              <div className="other-projects-item"> Google Cloud Platform </div>
            </div>
          </div>
          <div className="other-projects-container">
            <div className="other-projects-header">
              {" "}
              Website - FFC Foundation{" "}
            </div>
            <div className="other-projects-description">
              Building websites for corporate business is not new to me. But
              building the website for my mother church and foundation is always
              a privelege and pleasure to me. I used WordPress and Elementor to
              build this website quickly. The write-ups, stories and articles
              are the core feature of this website so I mostly highlighted the
              blog page.
            </div>
            <div className="other-projects-stack">
              <div className="other-projects-item"> WordPress </div>
              <div className="other-projects-item"> HTML </div>
              <div className="other-projects-item"> CSS </div>
              <div className="other-projects-item"> PHP </div>
              <div className="other-projects-item"> Elementor </div>
              <div className="other-projects-item"> Marketing Plugin </div>
            </div>
          </div>
          <div className="other-projects-container">
            <div className="other-projects-header">Tasks Tracker</div>
            <div className="other-projects-description">
              I developed this app to helped me organize myself when it comes to
              tracking my tasks/time everyday. I used this app more often but
              when I learn how to used notion app, I started to loved it and
              quickly transition to that.
            </div>
            <div className="other-projects-stack">
              <div className="other-projects-item"> React Native </div>
              <div className="other-projects-item"> Expo </div>
              <div className="other-projects-item"> Javascript </div>
              <div className="other-projects-item"> Git@Github </div>
            </div>
          </div>
          <div className="other-projects-container">
            <div className="other-projects-header"> More Websites </div>
            <div className="other-projects-description">
              I do have a lot of websites that I built before but this is the
              only websites I am allowed to showed you:
              <ul>
                <li>FFC Foundation - https://ffcfoundationph.com/</li>
                <li>Bizcap AU - https://www.bizcap.com.au/ </li>
                <li>Bizcap NZ - https://www.bizcap.nz/ </li>
              </ul>
            </div>
            <div className="other-projects-stack">
              <div className="other-projects-item"> WordPress </div>
              <div className="other-projects-item"> Web Builder </div>
              <div className="other-projects-item"> Elementor </div>
              <div className="other-projects-item"> Divi </div>
              <div className="other-projects-item"> HTML </div>
              <div className="other-projects-item"> CSS </div>
              <div className="other-projects-item"> Javascript </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectContent;
