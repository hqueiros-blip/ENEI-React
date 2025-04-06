import { test, expect } from "@playwright/test";

test("ENEI APP", async ({ page }) => {
  await test.step("GIVEN I am on the home page", async () => {
    // Mesmo com baseURL definido, é importante garantir a navegação explícita
    await page.goto("/");
  });

  await test.step("WHEN I mark an event as attended", async () => {
    // Verifica se o evento está visível na tela
    await expect(
      page.getByRole("heading", { name: "React Basics" })
    ).toBeVisible();

    // Seleciona o primeiro botão com o texto correspondente
    const attendButton = page
      .getByRole("button", {
        name: "Marcar evento como assistido",
      })
      .first();

    // Clica no botão para marcar o evento como assistido
    await attendButton.click();
  });

  await test.step("THEN a confirmation message is shown", async () => {
    // Verifica se a mensagem de confirmação aparece na tela
    const attendedEvent = page.getByText("Evento Assistido");
    await expect(attendedEvent).toBeVisible();
  });
});
