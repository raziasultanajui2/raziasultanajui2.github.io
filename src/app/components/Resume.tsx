import React from "react";
import resumeText from "../../imports/Razia_CV.md";

export function Resume() {
  return (
    <section id="resume" className="px-4 py-24">
      <div className="mx-auto max-w-4xl">
        <h2 className="text-2xl font-bold">Resume</h2>
        <div className="mt-4 whitespace-pre-wrap text-sm text-muted-foreground">
          {resumeText}
        </div>
      </div>
    </section>
  );
}

export default Resume;
