const signInForm = document.getElementById("sign-form");

const nicknameInput = document.getElementById("nickname");
const passwordInput = document.getElementById("password");

signInForm.addEventListener("submit", (e) => {
  e.preventDefault();

  let ret = false;
  if (!validateNickname({ target: nicknameInput })) ret = true;
  if (!validatePassword({ target: passwordInput })) ret = true;
  if (ret) return;

  // TODO: 로그인 api 연결
});

nicknameInput.addEventListener("blur", validateNickname);
passwordInput.addEventListener("blur", validatePassword);

function validateNickname(e) {
  document.getElementById("nickname-comment")?.remove();
  e.target.classList.remove("error");
  e.target.previousSibling.previousSibling.classList?.remove("error-text");

  const comment = isWrongNickname(e.target.value);
  if (!comment) return true;

  const commentSpan = document.createElement("span");
  commentSpan.id = "nickname-comment";
  commentSpan.classList.add("error-text");
  commentSpan.style.fontSize = "0.8rem";
  commentSpan.innerText = comment;

  e.target.parentNode.append(commentSpan);
  e.target.classList.add("error");
  e.target.previousSibling.previousSibling.classList.add("error-text");

  return false;
}

function isWrongNickname(nickname) {
  const regex = /^[a-zA-Z가-힣]{6,20}$/;

  if (!regex.test(nickname))
    return "닉네임은 6자에서 20자 이내의 한글, 영어만 가능합니다.";
}

function validatePassword(e) {
  document.getElementById("password-comment")?.remove();
  e.target.classList.remove("error");
  e.target.previousSibling.previousSibling.classList?.remove("error-text");

  const comment = isWrongPassword(e.target.value);
  if (!comment) return true;

  const commentSpan = document.createElement("span");
  commentSpan.id = "password-comment";
  commentSpan.classList.add("error-text");
  commentSpan.style.fontSize = "0.8rem";
  commentSpan.innerText = comment;

  e.target.parentNode.append(commentSpan);
  e.target.classList.add("error");
  e.target.previousSibling.previousSibling.classList.add("error-text");

  return false;
}

function isWrongPassword(password) {
  const regex = /^(?=.*?[A-Za-z])(?=.*?\d)(?=.*?[!@#$%^&*(),.-]).{8,16}$/;
  if (!regex.test(password))
    return "비밀번호는 8자에서 16자 이내이며, 영어, 숫자, 특수문자를 포함해야 합니다.";
}
