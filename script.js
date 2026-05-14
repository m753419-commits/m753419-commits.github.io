const tools = [
    { name: "ChatGPT", desc: "OpenAI 的旗艦對話式 AI", tag: "對話", url: "https://chat.openai.com" },
    { name: "Claude", desc: "Anthropic 的安全 AI 助手", tag: "對話", url: "https://claude.ai" },
    { name: "Gemini", desc: "Google 的多模態 AI", tag: "對話", url: "https://gemini.google.com" },
    { name: "Midjourney", desc: "頂級 AI 圖片生成", tag: "繪圖", url: "https://midjourney.com" },
    { name: "Stable Diffusion", desc: "開源 AI 繪圖模型", tag: "繪圖", url: "https://stability.ai" },
    { name: "DALL·E 3", desc: "OpenAI 的文字生圖", tag: "繪圖", url: "https://openai.com/dall-e-3" },
    { name: "Cursor", desc: "AI 驅動的程式編輯器", tag: "程式", url: "https://cursor.sh" },
    { name: "GitHub Copilot", desc: "AI 程式碼助手", tag: "程式", url: "https://github.com/features/copilot" },
    { name: "Claude Code", desc: "Anthropic 的終端機 AI 工程師", tag: "程式", url: "https://docs.anthropic.com/en/docs/claude-code" },
    { name: "Runway", desc: "AI 影片生成與編輯", tag: "影片", url: "https://runwayml.com" },
    { name: "Sora", desc: "OpenAI 的文字生影片", tag: "影片", url: "https://openai.com/sora" },
    { name: "Notion AI", desc: "AI 筆記與寫作助手", tag: "生產力", url: "https://notion.so" },
    { name: "Gamma", desc: "AI 簡報生成工具", tag: "生產力", url: "https://gamma.app" },
    { name: "Perplexity", desc: "AI 搜尋引擎", tag: "搜尋", url: "https://perplexity.ai" },
    { name: "StepFun", desc: "中國的 AI 模型平台", tag: "對話", url: "https://platform.stepfun.com" },
];

const toolList = document.getElementById("tool-list");
tools.forEach(t => {
    const card = document.createElement("div"); card.className = "tool-card";
    card.innerHTML = `<h3>${t.name}</h3><p>${t.desc}</p><span class="tag">${t.tag}</span>`;
    card.addEventListener("click", () => window.open(t.url, "_blank"));
    toolList.appendChild(card);
});
