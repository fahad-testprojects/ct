document.addEventListener('DOMContentLoaded', function() {
    const classCardsContainer = document.querySelector('.class-cards-container');
    const examListSection = document.getElementById('exam-list-section');
    const examButtonsContainer = document.getElementById('exam-buttons-container');
    const examListTitle = document.getElementById('exam-list-title');
    const backToClassesBtn = document.getElementById('back-to-classes-btn');
    const classSelectionSection = document.getElementById('class-selection');

    // পরীক্ষার লিঙ্ক, নাম এবং পাসকোড সহ প্রতিটি ক্লাসের পরীক্ষার তালিকা
    // এখানে প্রতিটি পরীক্ষার জন্য আলাদা লিঙ্ক এবং পাসকোড নির্ধারণ করুন
    const classExams = {
        "class7": [
            { name: "সপ্তম শ্রেণীর ক্লাস টেস্ট ১", link: "https://forms.gle/CX5RGk8suHxiDNcA7", passcode: "ct11" },
            { name: "সপ্তম শ্রেণীর ক্লাস টেস্ট ২", link: "YOUR_GOOGLE_FORM_LINK_CLASS7_2", passcode: "PASSCODE7_2" }
            // সপ্তম শ্রেণীর আরও ক্লাস টেস্ট এখানে যোগ করতে পারেন
        ],
        "class8": [
            { name: "অষ্টম শ্রেণীর ক্লাস টেস্ট ১", link: "YOUR_GOOGLE_FORM_LINK_CLASS8_1", passcode: "PASSCODE8_1" },
            { name: "অষ্টম শ্রেণীর ক্লাস টেস্ট ২", link: "YOUR_GOOGLE_FORM_LINK_CLASS8_2", passcode: "PASSCODE8_2" }
            // অষ্টম শ্রেণীর আরও ক্লাস টেস্ট এখানে যোগ করতে পারেন
        ],
        "class9": [
            { name: "নবম শ্রেণীর ক্লাস টেস্ট ১", link: "YOUR_GOOGLE_FORM_LINK_CLASS9_1", passcode: "PASSCODE9_1" },
            { name: "নবম শ্রেণীর ক্লাস টেস্ট ২", link: "YOUR_GOOGLE_FORM_LINK_CLASS9_2", passcode: "PASSCODE9_2" }
            // নবম শ্রেণীর আরও ক্লাস টেস্ট এখানে যোগ করতে পারেন
        ],
        "class10": [
            { name: "দশম শ্রেণীর ক্লাস টেস্ট ১", link: "YOUR_GOOGLE_FORM_LINK_CLASS10_1", passcode: "PASSCODE10_1" },
            { name: "দশম শ্রেণীর ক্লাস টেস্ট ২", link: "YOUR_GOOGLE_FORM_LINK_CLASS10_2", passcode: "PASSCODE10_2" }
            // দশম শ্রেণীর আরও ক্লাস টেস্ট এখানে যোগ করতে পারেন
        ]
        // প্রয়োজন অনুযায়ী আরও ক্লাস এবং তাদের পরীক্ষার তালিকা যোগ করতে পারেন
    };

    // ক্লাস কার্ডে ক্লিক করার ইভেন্ট হ্যান্ডলার
    classCardsContainer.addEventListener('click', function(event) {
        const clickedCard = event.target.closest('.class-card');
        if (clickedCard) {
            const selectedClass = clickedCard.dataset.class;
            displayExamList(selectedClass);
        }
    });

    function displayExamList(className) {
        classSelectionSection.classList.add('hidden');
        examListSection.classList.remove('hidden');
        examListTitle.textContent = `${getClassNameInBengali(className)} এর ক্লাস টেস্ট সমূহ`;
        examButtonsContainer.innerHTML = ''; // Clear previous buttons

        const exams = classExams[className];
        if (exams && exams.length > 0) {
            exams.forEach(exam => {
                const button = document.createElement('button');
                button.classList.add('exam-button');
                button.textContent = exam.name;
                button.addEventListener('click', function() {
                    const enteredPasscode = prompt(`"${exam.name}" পরীক্ষার জন্য পাসকোড দিন:`);
                    if (enteredPasscode !== null && enteredPasscode === exam.passcode) {
                        window.open(exam.link, '_blank');
                    } else if (enteredPasscode !== null) {
                        alert('দুঃখিত, পাসকোডটি সঠিক নয়।');
                    }
                    // যদি ব্যবহারকারী "Cancel" ক্লিক করে, তাহলে কিছুই হবে না
                });
                examButtonsContainer.appendChild(button);
            });
        } else {
            examButtonsContainer.innerHTML = `<p>এই ক্লাসের জন্য বর্তমানে কোনো ক্লাস টেস্ট উপলব্ধ নেই।</p>`;
        }
    }

    // ইংরেজি ক্লাস নামের বাংলা প্রতিরূপ
    function getClassNameInBengali(className) {
        switch (className) {
            case 'class7': return 'সপ্তম শ্রেণী';
            case 'class8': return 'অষ্টম শ্রেণী';
            case 'class9': return 'নবম শ্রেণী';
            case 'class10': return 'দশম শ্রেণী';
            default: return 'নির্বাচিত শ্রেণী'; // fallback
        }
    }

    // "ক্লাসে ফিরে যান" বাটনে ক্লিক করার ইভেন্ট হ্যান্ডলার
    backToClassesBtn.addEventListener('click', function() {
        examListSection.classList.add('hidden');
        classSelectionSection.classList.remove('hidden');
    });
});
