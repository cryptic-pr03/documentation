import React from "react";
import styles from "./styles.module.css";
import Github from "../../../static/img/github-mark-white.svg"

const ProjectCard = ({ data }) => {
  return (
    <div className={`${styles.project_card}`}>
      <div className="px-5 pt-8 pb-12">
        <div className={styles.project_card_inner_box}>
          <div className={styles.inner_box_image}>
            <img
              src={data.image}
              loading="eager"
              alt="Project Image"
              className="object-cover w-full h-full rounded-t-2xl"
            />
          </div>
          <div className="px-4 pt-6 pb-16 text-left">
            <h6 className="text-xl font-semibold text-white lg:text-2xl ">{data.title}</h6>
            <p className="mt-2 text-xs text-slate-300 md:text-sm">
              {data.description}
            </p>
          </div>
        </div>
        <div className="flex items-center justify-around font-light -mt-9">
          <a
            href={data.github}
            className={`px-2 py-2 ${styles.logo}`}
          >
            <Github />
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
