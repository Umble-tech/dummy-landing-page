import S from "@sanity/desk-tool/structure-builder";

const excludeSites = ["siteSettings", "landingPage", "registerForm"];

export default () =>
  S.list()
    .title("Content")
    .items([
      S.listItem()
        .title("Settings")
        .child(
          S.editor().schemaType("siteSettings").documentId("siteSettings")
        ),
      S.listItem()
        .title("Landing Page")
        .child(S.editor().schemaType("landingPage").documentId("landingPage")),
      S.listItem()
        .title("Form Page")
        .child(
          S.editor().schemaType("registerForm").documentId("registerForm")
        ),
      S.divider(),
      ...S.documentTypeListItems().filter(
        (listItem) => !excludeSites.includes(listItem.getId())
      ),
    ]);
