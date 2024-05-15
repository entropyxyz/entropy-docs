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
        { type: 'doc', id: 'concepts/access-modes', label: 'Access Modes' },
        { type: 'doc', id: 'concepts/joining-the-network', label: 'Joining the network' },
        { type: 'doc', id: 'concepts/node-encryption-and-authentication', label: 'Node encryption and authentication' },
        { type: 'doc', id: 'concepts/proactive-refresh', label: 'Proactive refresh' },
        { type: 'doc', id: 'concepts/program-features', label: 'Program features' },
        { type: 'doc', id: 'concepts/register', label: 'Register' },
        { type: 'doc', id: 'concepts/sign', label: 'Sign' },
        { type: 'doc', id: 'concepts/signing-group-selection', label: 'Signing group selection' },
        { type: 'doc', id: 'concepts/threshold-signature-scheme', label: 'Threshold signature scheme' },
        { type: 'doc', id: 'concepts/upload-programs', label: 'Upload programs' },
        { type: 'doc', id: 'concepts/validators', label: 'Validators' },
      ],
    },
    /* Hiding the Guides section until everything is written. The posts have been set to draft mode. 
     *
     * {
      type: 'category',
      label: 'Guides',
      items: [
        { type: 'doc', id: 'guides/create-a-wallet', label: 'Create a wallet' },
        { type: 'doc', id: 'guides/register-an-address', label: 'Register an address' },
        { type: 'doc', id: 'guides/deploy-a-program', label: 'Deploy a program' },
        { type: 'doc', id: 'guides/query-the-chain', label: 'Query the chain' },
      ],
    }, */
    {
      type: 'category',
      label: 'Reference',
      items: [
        { type: 'doc', id: 'reference/cli', label: 'CLI' },
        { type: 'doc', id: 'reference/sdk', label: 'SDK' },
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

