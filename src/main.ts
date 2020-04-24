import Case from "case";
import { IParameters } from "./index";
import { ProjectFile } from "./abstractions/ProjectFile";
import { Logger } from "./abstractions/Logger";

export async function main({ projectName }: IParameters) {
  const data = {
    projectName: {
      camel: Case.camel(projectName),
      pascal: Case.pascal(projectName),
      kebab: Case.kebab(projectName),
    },
  };

  Logger.init("/", "log.log");
  ProjectFile.createProjectDir(data.projectName.kebab);
  ProjectFile.setSharedTemplateData(data);

  await Promise.all([new ProjectFile("foo/bar", "test.ts", "foo").generate()]);
}
