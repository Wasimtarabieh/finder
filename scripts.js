document.addEventListener('DOMContentLoaded', () => {
    const courseCalendar = document.getElementById('course-calendar');
    const courseDetails = document.getElementById('course-info');
    const notificationList = document.getElementById('notification-list');
    const profileSection = document.getElementById('profile');
    const profileUsername = document.getElementById('profile-username');
    const profileEmail = document.getElementById('profile-email');
    const loginButton = document.getElementById('login-button');
    const signupButton = document.getElementById('signup-button');
    const logoutButton = document.getElementById('logout-button');
    const loginModal = document.getElementById('login-modal');
    const signupModal = document.getElementById('signup-modal');
    const loginForm = document.getElementById('login-form');
    const signupForm = document.getElementById('signup-form');
    const closeLoginModal = document.querySelector('.close-login');
    const closeSignupModal = document.querySelector('.close-signup');
    const searchBar = document.getElementById('search-bar');

    function getUpcomingCourses() {
        return [
            { title: "קורס מנהל עבודה בבניין ובנייה הנדסית", totalHours: 200, theoryHours: 120, practicalHours: 80, certificate: "תעודת מנהל עבודה בבניין", requirements: ["ניסיון בעבודה בבניין"], topics: ["ניהול עבודה", "בטיחות", "חוקים ותקנות"] },
            { title: "קורס בודק שכר מוסמך", totalHours: 180, theoryHours: 150, practicalHours: 30, certificate: "תעודת בודק שכר מוסמך", requirements: ["ניסיון בחשבונאות"], topics: ["חוקי עבודה", "בדיקת שכר", "תוכנות שכר"] },
            { title: "קורס מנהל חשבונות סוג 1 - בסיסי", totalHours: 160, theoryHours: 140, practicalHours: 20, certificate: "תעודת מנהל חשבונות סוג 1", requirements: ["תעודת בגרות"], topics: ["חשבונאות בסיסית", "דיווח כספי", "תוכנות חשבונאות"] },
            { title: "קורס מנהל חשבונות סוג 3 - ראשי", totalHours: 220, theoryHours: 180, practicalHours: 40, certificate: "תעודת מנהל חשבונות סוג 3", requirements: ["תעודת מנהל חשבונות סוג 2"], topics: ["חשבונאות מתקדמת", "ניהול כספים", "תוכנות חשבונאות מתקדמות"] },
            { title: "קורס ניהול קמפיינים ממומנים (PPC)", totalHours: 100, theoryHours: 80, practicalHours: 20, certificate: "תעודת ניהול קמפיינים ממומנים", requirements: ["הבנה בסיסית בשיווק"], topics: ["ניהול קמפיינים", "מדידת תוצאות", "פרסום ממומן"] },
            { title: "קורס מנהל עבודה עפר, תשתיות וכבישים", totalHours: 240, theoryHours: 200, practicalHours: 40, certificate: "תעודת מנהל עבודה עפר", requirements: ["ניסיון בעבודות עפר"], topics: ["ניהול עבודות עפר", "תשתיות", "כבישים"] },
            { title: "קורס מיגון ואבטחה", totalHours: 150, theoryHours: 100, practicalHours: 50, certificate: "תעודת מיגון ואבטחה", requirements: ["ניסיון בסיסי באבטחה"], topics: ["תורת האבטחה", "מערכות מיגון", "חוקי אבטחה"] },
            { title: "קורס מפעיל עגורן צריח", totalHours: 180, theoryHours: 120, practicalHours: 60, certificate: "תעודת מפעיל עגורן צריח", requirements: ["בריאות פיזית תקינה"], topics: ["תפעול עגורנים", "בטיחות בעבודה", "חוקי תעבורה"] },
            { title: "קורס שמאות רכוש", totalHours: 200, theoryHours: 160, practicalHours: 40, certificate: "תעודת שמאות רכוש", requirements: ["הבנה בסיסית בחוקי רכוש"], topics: ["שמאות רכוש", "הערכת שווי נכסים", "חוקי שמאות"] }
        ];
    }

    function displayCalendar() {
        const calendarItems = getUpcomingCourses();
        courseCalendar.innerHTML = "";
        calendarItems.forEach((item, index) => {
            const calendarDiv = document.createElement('div');
            calendarDiv.classList.add('calendar-item');
            calendarDiv.innerHTML = `
                <strong>${item.title}</strong>
                <div class="details">
                    <p>סה"כ שעות: ${item.totalHours}</p>
                    <p>עיוני: ${item.theoryHours}</p>
                    <p>מעשי: ${item.practicalHours}</p>
                    <p>תעודה: ${item.certificate}</p>
                </div>
                <button class="details-button">צפה בפרטים</button>
            `;
            calendarDiv.querySelector('.details-button').addEventListener('click', () => {
                displayCourseDetails(item);
                addNotification(`צפית בפרטים של ${item.title}`);
            });
            courseCalendar.appendChild(calendarDiv);
        });
    }

    function displayCourseDetails(course) {
        courseDetails.innerHTML = `
            <h3>${course.title}</h3>
            <p><strong>סה"כ שעות:</strong> ${course.totalHours}</p>
            <p><strong>עיוני:</strong> ${course.theoryHours}</p>
            <p><strong>מעשי:</strong> ${course.practicalHours}</p>
            <p><strong>תעודה:</strong> ${course.certificate}</p>
            <p><strong>תנאי קבלה:</strong></p>
            <ul>
                ${course.requirements.map(req => `<li>${req}</li>`).join('')}
            </ul>
            <p><strong>נושאי הלימוד המרכזיים:</strong></p>
            <ul>
                ${course.topics.map(topic => `<li>${topic}</li>`).join('')}
            </ul>
            <button id="register-button" class="register-button">הרשמה</button>
            <div id="registration-form" style="display: none;">
                <form id="interest-form-${course.title.replace(/\s+/g, '-')}">
                    <h2>מעוניין בקורס?</h2>
                    <label for="first-name">שם פרטי:</label>
                    <input type="text" id="first-name" name="first-name" required>
                    <label for="last-name">משפחה:</label>
                    <input type="text" id="last-name" name="last-name" required>
                    <label for="city">עיר:</label>
                    <input type="text" id="city" name="city" required>
                    <label for="phone">נייד:</label>
                    <input type="tel" id="phone" name="phone" required>
                    <label for="email">דואר אלקטרוני:</label>
                    <input type="email" id="email" name="email" required>
                    <label for="comments">הערות:</label>
                    <textarea id="comments" name="comments"></textarea>
                    <input type="hidden" id="course" name="course" value="${course.title}">
                    <button type="submit" class="register-button">שלח</button>
                    <p>הפרטים שלך ישמשו אך ורק למטרות פנימיות ויועברו למוסדות החינוך הרלוונטיים לצורך יצירת קשר איתך בנוגע לקורס אליו נרשמת.</p>
                </form>
            </div>
        `;
        document.getElementById('register-button').addEventListener('click', () => {
            document.getElementById('registration-form').style.display = 'block';
        });
        document.getElementById(`interest-form-${course.title.replace(/\s+/g, '-')}`).addEventListener('submit', handleFormSubmit);
    }

    function handleFormSubmit(event) {
        event.preventDefault();
        const formData = new FormData(event.target);
        const data = {
            firstName: formData.get('first-name'),
            lastName: formData.get('last-name'),
            city: formData.get('city'),
            phone: formData.get('phone'),
            email: formData.get('email'),
            comments: formData.get('comments'),
            course: formData.get('course'),
        };

        const loadingIndicator = document.createElement('div');
        loadingIndicator.innerHTML = 'שולח...';
        document.getElementById('registration-form').appendChild(loadingIndicator);

        fetch('https://your-server-endpoint.com/save', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        }).then(response => {
            loadingIndicator.remove();
            if (response.ok) {
                alert('Your information has been submitted successfully.');
                document.getElementById('registration-form').style.display = 'none';
                addNotification(`נרשמת בהצלחה לקורס ${data.course}`);
            } else {
                alert('There was an error submitting your information.');
            }
        });
    }

    function searchCourses() {
        const query = searchBar.value.toLowerCase();
        const calendarItems = courseCalendar.getElementsByClassName('calendar-item');

        for (let item of calendarItems) {
            const title = item.getElementsByTagName('strong')[0].textContent.toLowerCase();
            if (title.includes(query)) {
                item.style.display = '';
            } else {
                item.style.display = 'none';
            }
        }
    }

    function addNotification(message) {
        const notificationItem = document.createElement('li');
        notificationItem.textContent = message;
        notificationList.appendChild(notificationItem);
    }

    // Show login modal
    loginButton.addEventListener('click', () => {
        loginModal.style.display = 'block';
    });

    // Show signup modal
    signupButton.addEventListener('click', () => {
        signupModal.style.display = 'block';
    });

    // Close modals
    closeLoginModal.addEventListener('click', () => {
        loginModal.style.display = 'none';
    });

    closeSignupModal.addEventListener('click', () => {
        signupModal.style.display = 'none';
    });

    window.addEventListener('click', (e) => {
        if (e.target == loginModal) {
            loginModal.style.display = 'none';
        }
        if (e.target == signupModal) {
            signupModal.style.display = 'none';
        }
    });

    // Handle login form submission
    loginForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const formData = new FormData(loginForm);
        const data = {
            username: formData.get('username'),
            password: formData.get('password'),
        };
        fetch('https://your-server-endpoint.com/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        }).then(response => response.json()).then(data => {
            if (data.success) {
                alert('התחברת בהצלחה.');
                profileUsername.textContent = data.user.username;
                profileEmail.textContent = data.user.email;
                loginModal.style.display = 'none';
                showProfile();
            } else {
                alert('שגיאה בהתחברות.');
            }
        });
    });

    // Handle signup form submission
    signupForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const formData = new FormData(signupForm);
        const data = {
            username: formData.get('username'),
            email: formData.get('email'),
            password: formData.get('password'),
        };
        fetch('https://your-server-endpoint.com/signup', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        }).then(response => response.json()).then(data => {
            if (data.success) {
                alert('נרשמת בהצלחה.');
                signupModal.style.display = 'none';
            } else {
                alert('שגיאה בהרשמה.');
            }
        });
    });

    // Login/Logout functionality (simplified)
    function showProfile() {
        profileSection.style.display = 'block';
        loginButton.style.display = 'none';
        signupButton.style.display = 'none';
        logoutButton.style.display = 'block';
    }

    function hideProfile() {
        profileSection.style.display = 'none';
        loginButton.style.display = 'block';
        signupButton.style.display = 'block';
        logoutButton.style.display = 'none';
    }

    logoutButton.addEventListener('click', () => {
        hideProfile();
    });

    // Profile update and password change forms
    const updateProfileForm = document.getElementById('update-profile-form');
    const changePasswordForm = document.getElementById('change-password-form');

    updateProfileForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const formData = new FormData(updateProfileForm);
        const data = {
            username: formData.get('username'),
            email: formData.get('email'),
        };
        // Send updated profile data to server
        fetch('https://your-server-endpoint.com/update-profile', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        }).then(response => {
            if (response.ok) {
                alert('פרטיך עודכנו בהצלחה.');
                profileUsername.textContent = data.username;
                profileEmail.textContent = data.email;
            } else {
                alert('שגיאה בעדכון הפרטים.');
            }
        });
    });

    changePasswordForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const formData = new FormData(changePasswordForm);
        const data = {
            currentPassword: formData.get('current-password'),
            newPassword: formData.get('new-password'),
        };
        // Send password change request to server
        fetch('https://your-server-endpoint.com/change-password', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        }).then(response => {
            if (response.ok) {
                alert('סיסמתך שונתה בהצלחה.');
            } else {
                alert('שגיאה בשינוי הסיסמה.');
            }
        });
    });

    displayCalendar();
    searchBar.addEventListener('keyup', searchCourses);
});
