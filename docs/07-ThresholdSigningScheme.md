
# Threshold Signing Scheme

- TODO for Bogdan

The threshold signing scheme used is the 2021 Canetti-Gennaro-Goldfeder-Makriyannis-Peled scheme from the paper ['UC Non-Interactive, Proactive, Threshold ECDSA with Identifiable Aborts'](https://eprint.iacr.org/2021/060)

For a high level introduction to threshold signing schemes, see [this section of the introsplainer](Intro#hello-i-would-like-one-cryptography).

- Implementation used by Entropy: [src](https://github.com/entropyxyz/cggmp21) [API](https://entropy-api-docs.vercel.app/cggmp21/cggmp21/index.html)
- 'Identifiable aborts' refers to being able to reveal which party has misbehaved when the signing protocol fails.

- Only the final round of the signing protocol requires knowledge of the message. The other rounds are known as the 'pre-signing' phase. 

- Either 4 or 7 communication rounds needed to sign a message, depending on the computation / communication trade-off chosen.

- [Presentation on the CGGMP21 scheme from Nikolaos Makriyannis](https://www.nist.gov/video/mpts-2020-talk-3a3-uc-non-interactive-proactive-threshold-ecdsa-identifiable-aborts)

- [Presentation of GG20 (CGGMP21's predecessor) from Steven Goldfelder](https://youtu.be/wtxH3PuMAgQ)
