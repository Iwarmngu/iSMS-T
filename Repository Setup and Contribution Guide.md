# Repository Setup and Contribution Guide

This guide will walk you through forking, cloning, setting up remotes, and working with the [iSMS-T GitHub repository](https://github.com/dev-henen/iSMS-T). You’ll also learn how to submit a **pull request (PR)** after making your changes.  

---

## Table of Contents
1. [Fork the Repository](#1-fork-the-repository)  
2. [Clone the Forked Repository](#2-clone-the-forked-repository)  
3. [Initialize a New Git Repository (Optional)](#3-initialize-a-new-git-repository-optional)  
4. [Set the Upstream Remote](#4-set-the-upstream-remote)  
5. [Basic Git Commands](#5-basic-git-commands)  
6. [Push and Pull Changes](#6-push-and-pull-changes)  
7. [Submit a Pull Request](#7-submit-a-pull-request)  

---

## 1. Fork the Repository
1. Visit the [iSMS-T repository](https://github.com/dev-henen/iSMS-T) on GitHub.
2. Click the **Fork** button in the top-right corner to create a copy under your GitHub account.

---

## 2. Clone the Forked Repository
In your terminal or command prompt, run the following command to clone your forked repository to your local machine:
```bash
git clone https://github.com/YOUR_USERNAME/iSMS-T.git
```

---

## 3. Initialize a New Git Repository (Optional)
If you haven’t cloned the project and want to start from scratch:
```bash
mkdir iSMS-T
cd iSMS-T
git init
```

---

## 4. Set the Upstream Remote
After cloning your fork, set the original repository as the **upstream remote** to keep your fork in sync:
```bash
cd iSMS-T
git remote add upstream https://github.com/dev-henen/iSMS-T.git
```

Verify the remotes:
```bash
git remote -v
```
Output should look like:
```
origin    https://github.com/YOUR_USERNAME/iSMS-T.git (fetch)
origin    https://github.com/YOUR_USERNAME/iSMS-T.git (push)
upstream  https://github.com/dev-henen/iSMS-T.git (fetch)
upstream  https://github.com/dev-henen/iSMS-T.git (push)
```

---

## 5. Basic Git Commands

### Stage All Changes:
```bash
git add .
```

### Commit the Changes:
```bash
git commit -m "Your commit message"
```

### Push to Your Forked Repository:
```bash
git push origin main
```

### Pull Updates from Upstream:
Keep your fork up-to-date with the original repo:
```bash
git pull upstream main
```

---

## 6. Push and Pull Changes

**Push** your changes to your fork:
```bash
git push origin main
```

If the upstream repository has new changes, **pull** them:
```bash
git pull upstream main
```

If conflicts occur, resolve them and commit the changes:
```bash
git add .
git commit -m "Resolved merge conflicts"
git push origin main
```

---

## 7. Submit a Pull Request

After pushing your changes to your fork, follow these steps to create a **pull request** (PR):

1. Go to your forked repository on GitHub:  
   `https://github.com/YOUR_USERNAME/iSMS-T`

2. Click the **Compare & pull request** button.

3. Ensure the **base repository** is set to:  
   `dev-henen/iSMS-T` and the **base branch** is `main`.

4. Add a title and description for your PR, explaining the changes you made.

5. Click **Create pull request**.

6. Wait for the repository owner to review your PR. You may need to make changes based on feedback.

---

That’s it! 🎉