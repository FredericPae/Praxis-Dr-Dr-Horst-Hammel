# Contributing

Thanks for helping build the website for Praxis Dr. Dr. Horst Hammel! 🎉

This guide keeps our teamwork smooth. **Please write all commits, issues, and
pull requests in English** so everyone can follow along. (The website text
itself stays in German — that's for the patients.)

## Getting set up (one time)
1. Make sure you have Git installed.
2. Clone the repository:
   ```bash
   git clone https://github.com/FredericPae/Praxis-Dr-Dr-Horst-Hammel.git
   cd Praxis-Dr-Dr-Horst-Hammel
   ```
3. Open `index.html` in your browser to see the current site.

## Making a change (recommended flow)
We use **branches + pull requests** so nothing breaks the live site by accident.

1. **Start from the latest `main`:**
   ```bash
   git checkout main
   git pull
   ```
2. **Create a branch** for your change (use a short, descriptive name):
   ```bash
   git checkout -b add-office-hours
   ```
3. **Make your edits**, then save a checkpoint:
   ```bash
   git add .
   git commit -m "Add real office hours to the schedule section"
   ```
4. **Push your branch:**
   ```bash
   git push -u origin add-office-hours
   ```
5. **Open a Pull Request** on GitHub. Describe what you changed and why.
   The other person reviews it, and once it's approved we merge it into `main`.
   GitHub Pages then publishes it automatically.

## Commit message style
Write short, clear messages in the imperative mood:
- ✅ `Add contact phone number`
- ✅ `Fix layout on mobile screens`
- ❌ `changes` / `stuff` / `update`

## Questions?
Open an [issue](https://github.com/FredericPae/Praxis-Dr-Dr-Horst-Hammel/issues)
and describe what you need — no question is too small.
