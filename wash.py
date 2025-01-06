import json
import subprocess

# JSON 数据
data = {
    "J413": {
        "Group1": ["Kevin", "Alice", "Una", "Chris", "Leo", "Donie", "Sophia"],
        "Group2": ["Yoyo", "Larry", "Lucas", "David", "Lucy", "Frank", "Emily"],
        "Group3": ["Chloe", "Eric", "James", "Rick", "Noe", "Bella", "Romey"],
        "Group4": ["Hardy", "Kathy", "Angel", "Alan", "Andre", "Lisa", "Winni"],
    },
    "J420": {
        "Group1": [
            "Cici 俊",
            "Cici 言",
            "Jeffery",
            "Shandi",
            "Bobby",
            "Jerry",
            "Leo",
            "Paddy",
            "Camille",
        ],
        "Group2": [
            "Tevin",
            "Max",
            "Mia",
            "Mona",
            "Yale",
            "Alice",
            "Carl H",
            "Dora",
            "Seven",
            "Eric",
        ],
        "Group3": [
            "Angela C",
            "Angela Y",
            "King",
            "Otto",
            "Asher",
            "Bill",
            "Carl L",
            "Joey",
            "Zoe",
        ],
        "Group4": [
            "Aden",
            "Amy",
            "Bella",
            "Brain",
            "Jack",
            "Tom",
            "Nikki",
            "Jacky",
            "Cindy",
        ],
    },
    "K214": {
        "Group1": ["Aaron", "Albert", "Allen董", "Ann", "Bella", "Mulan"],
        "Group2": ["Allen滑", "Hugh", "Leo", "Carl", "Max", "Qadir"],
        "Group3": ["Amy", "Tank", "Carrie", "Cyril", "Michael", "Reesie"],
        "Group4": ["Aurora", "Sara", "Oscar", "Ella", "Una"],
    },
}

# AppleScript 模板
applescript_template = """
tell application "Keynote"
    activate
    tell the front document
        -- 获取所有幻灯片
        set allSlides to slides
        
        -- 根据组名找到对应的模板幻灯片
        set templateSlide to item {slide_index} of allSlides
        
        -- 为每位成员创建幻灯片
        repeat with member in {members}
            set newSlide to duplicate templateSlide to after templateSlide
            tell newSlide
                -- 遍历所有文本框和对象，替换文本
                repeat with t in every text item
                    if (content of t) is "Amber" then
                        set content of t to member
                    end if
                    if (content of t) is "J233" then
                        set content of t to "{class_name}"
                    end if
                end repeat
            end tell
        end repeat
    end tell
end tell
"""


# 函数：运行 AppleScript
def run_applescript(script):
    process = subprocess.run(
        ["osascript", "-e", script], text=True, capture_output=True
    )
    if process.returncode != 0:
        print("AppleScript Error:", process.stderr)
    return process.stdout


# 遍历 JSON 数据并生成幻灯片
for class_name, groups in data.items():
    slide_index = 1  # 假设模板幻灯片从第 1 张开始
    for group_name, members in groups.items():
        # 将数据填充到 AppleScript 模板
        members_str = "{" + ", ".join([f'"{member}"' for member in members]) + "}"
        script = applescript_template.format(
            slide_index=slide_index, members=members_str, class_name=class_name
        )
        print(f"Processing {class_name} - {group_name}")
        run_applescript(script)
        slide_index += 1

print("幻灯片生成完成！")
