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

  await Promise.all([
    new ProjectFile(".vscode", "launch.json").generate(),
    new ProjectFile(".vscode", "settings.json").generate(),
    new ProjectFile("", ".gitignore").generate(),
    new ProjectFile("", ".npmrc").generate(),
    new ProjectFile("", "package.json").generate(),
    new ProjectFile("", "tsconfig.json").generate(),
    new ProjectFile("src", "index.ts").generate(),
    new ProjectFile("src", "main.ts").generate(),
    new ProjectFile("src/abstractions", "Logger.ts").generate(),
    new ProjectFile("src/abstractions", "ProjectFile.ts").generate(),
    new ProjectFile("templates", "test.mu").generate(),
    new ProjectFile("templates", ".gitkeep").generate(),
  ]);
}
