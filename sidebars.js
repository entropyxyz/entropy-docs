export default {
  // Main sidebar for all docs.
  sidebar: [
    {
      type: 'category',
      label: 'Basics',
      items: [
        { type: 'doc', id: 'basics/quickstart', label: 'Quickstart' },
        { type: 'doc', id: 'basics/entrosplainer', label: 'Entrosplainer' },
        { type: 'doc', id: 'basics/support', label: 'Support' },
        { type: 'doc', id: 'basics/glossary', label: 'Glossary' },
      ],
    },
    {
      type: 'category',
      label: 'Concepts',
      items: [
        { type: 'doc', id: 'concepts/joining-the-network', label: 'Joining the network' },
        { type: 'doc', id: 'concepts/node-encryption-and-authentication', label: 'Node encryption and authentication' },
        { type: 'doc', id: 'concepts/proactive-refresh', label: 'Proactive refresh' },
        { type: 'doc', id: 'concepts/programs', label: 'Programs ' },
        { type: 'doc', id: 'concepts/registering', label: 'Registering' },
        { type: 'doc', id: 'concepts/signing', label: 'Signing' },
        { type: 'doc', id: 'concepts/threshold-signature-scheme', label: 'Threshold signature scheme' },
        { type: 'doc', id: 'concepts/validators', label: 'Validators' },
      ],
    },
    {
      type: 'category',
      label: 'Guides',
      items: [
        { type: 'doc', id: 'guides/manage-accounts', label: 'Manage accounts' },
        { type: 'doc', id: 'guides/get-test-funds', label: 'Get test funds' },
        { type: 'doc', id: 'guides/transfer-funds', label: 'Transfer funds' },
        { type: 'doc', id: 'guides/register-an-account', label: 'Register an account' },
        { type: 'doc', id: 'guides/use-the-explorer', label: 'Use the explorer' },
      ],
    },
    {
      type: 'category',
      label: 'Reference',
      items: [
        { type: 'doc', id: 'reference/networks', label: 'Networks' },
        { type: 'doc', id: 'reference/cli', label: 'CLI' },
      ],
    },
  ],

  // Guides sidebar with a single entry (assuming guides is the main doc)
  guidesSidebar: [
    {
      type: 'doc',
      id: 'guides/guides',
      label: 'Guides',
    },
  ],
};

