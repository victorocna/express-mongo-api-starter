# Netopia Plugin

## Dependencies

- `netopia-card` [NPM package](https://www.npmjs.com/package/netopia-card)

## Environment variables

- `NETOPIA_CONFIRM_URL`: Backend URL used by Netopia to confirm the order after the payment has been made
- `NETOPIA_RETURN_URL`: Frontend URL used by the app to show the status of the order (thank you page)
- `NETOPIA_SIGNATURE`: Netopia settings
- `NETOPIA_PUBLIC_KEY_B64`: Netopia settings
- `NETOPIA_PRIVATE_KEY_B64`: Netopia settings

Netopia settings are located in the [Admin Dashboard - Domains](https://admin.netopia-payments.com/domains) page,
click the "Setari tehnice" button to reveal them.

## Configuration

Before accepting card payments with Netopia you need to:

- Create a new account for [Netopia](https://admin.netopia-payments.com)
- Make sure you already have an existing company registered (eg: `ACME SRL`)
- Complete the registration form with data from the `ACME SRL` company
- Make sure the domain you will register as the main domain was purchased by the company or by a company administrator,
otherwise you will need extra documents
- Make sure you have the following in the footer of the website:
  - Termeni si conditii
  - Politica de confidentialitate
  - Politica de cookie-uri
  - Politica GDPR
  - Politica de anulare comanda
  - Politica de livrare comanda
  - Link catre ANPC
  - Link si logo SAL (Solutionarea Alternativa a Litigiilor)
  - Link si logo SOL (Solutionarea Online a Litigiilor)
  - Logo Netopia Payments

After following these steps you should be able to accept card payments with Netopia!
