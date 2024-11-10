// Array of reasons
const reasons = [
    "You mean everything to me",
    "You make forget all my worries and everything.",
    "Your smile lights up my world.",
    "You always know how to make me laugh.",
    "You are so PERFECT OKAY LIKE JUST BE MINE PLEASEE.",
    "You ARE JUST SO AAAA MARIA.",
    "You’re my favorite person to talk to.",
    "You’re so supportive and understanding.",
    "You make even the simplest moments special.",
    "I love how we can talk about literally anything and everything.",
    "You always support me in whatever I want to do and always push me to do better.",
    "I LOVE YOU SO SO SO SO SO MUCH MARIA LIKE AAAA.",
    "I’m so lucky to have you in my life.",
    "You’re my safe space.",
    "You make me feel so loved and appreciated.",
    "Your voice is my favourite song.",
    "Everytime I look at your eyes I get lost.",
    "You're the one I see a future with.",
    "I cannot get you off my mind.",
    "You’re the highlight of my day, every day."
  ];
  
  // Get the heart wall element
  const heartWall = document.getElementById("heart-wall");
  
  // Populate the heart wall with hearts
  reasons.forEach((reason, index) => {
    const heart = document.createElement("div");
    heart.classList.add("heart");
    heart.onclick = () => showReason(reason);
    heartWall.appendChild(heart);
  });
  
  // Show the popup with the reason
  function showReason(reason) {
    const popup = document.getElementById("popup");
    const reasonText = document.getElementById("reason-text");
    reasonText.textContent = reason;
    popup.style.display = "block";
  }
  
  // Close the popup
  function closePopup() {
    document.getElementById("popup").style.display = "none";
  }
  