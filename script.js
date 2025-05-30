document.addEventListener('DOMContentLoaded', () => {
    // Smooth scrolling for navigation links
    document.querySelectorAll('nav ul li a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Create a modal for quick link content
    const modal = document.createElement('div');
    modal.classList.add('modal');
    document.body.appendChild(modal);

    const modalContent = document.createElement('div');
    modalContent.classList.add('modal-content');
    modal.appendChild(modalContent);

    const closeButton = document.createElement('span');
    closeButton.classList.add('close-button');
    closeButton.innerHTML = '&times;'; // 'times' symbol for close
    modalContent.appendChild(closeButton);

    const modalTitle = document.createElement('h3');
    modalContent.appendChild(modalTitle);

    const modalBody = document.createElement('div');
    modalContent.appendChild(modalBody);

    // Function to open the modal
    function openModal(title, content) {
        modalTitle.textContent = title;
        modalBody.innerHTML = content;
        modal.style.display = 'block';
    }

    // Function to close the modal
    closeButton.addEventListener('click', () => {
        modal.style.display = 'none';
    });

    // Close modal if clicked outside content
    window.addEventListener('click', (event) => {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    });

    // Quick Links functionality
    document.getElementById('footer-about').addEventListener('click', (e) => {
        e.preventDefault();
        openModal('About Us', `
            <p>We are a professional digital service provider who can help you in your journey. We provide modern and creative digital solutions tailored to your needs. Our services include mobile apps, websites, business cards, professional resumes, business ads, Facebook and Instagram ads, digital forms and business logo design. Our goal is to get your business recognized in the digital world and help in growth.</p>
        `);
    });

    document.getElementById('footer-privacy').addEventListener('click', (e) => {
        e.preventDefault();
        openModal('Privacy Policy', `
            <p>We take your privacy seriously. Our services such as mobile apps, when providing websites, business cards, professional resumes, digital forms, business and social media ads (Facebook/Instagram), and logo design, we collect only the necessary information.</p>
            <h4>Information we collect:</h4>
            <ul>
                <li>Name, email, phone number</li>
                <li>Information related to business or personal needs</li>
                <li>Your design preferences</li>
            </ul>
            <h4>How we use information:</h4>
            <ul>
                <li>To customize services</li>
                <li>To contact clients and provide updates</li>
                <li>To fulfill and deliver orders</li>
            </ul>
            <p>We do not share your information, except when it is required by law.</p>
            <p>Your information is secure. We do not sell your data to any third parties and follow appropriate security measures. If you need to contact us to update, delete your information or have any other questions, please contact us at our email or mobile number.</p>
        `);
    });

    document.getElementById('footer-terms').addEventListener('click', (e) => {
        e.preventDefault();
        openModal('Terms of Service', `
            <ol>
                <li><strong>Nature of service:</strong> We provide digital services like website, mobile app, business card, professional resume, social media ads (Facebook/Instagram), digital forms and business logo.</li>
                <li><strong>Payment and Refunds:</strong> All services are paid for in advance. No refunds will be given once the service has commenced.</li>
                <li><strong>Deadline:</strong> The deadline for each project is set according to the complexity of the service. Provide the client with the required information and materials on time.</li>
                <li><strong>Client Responsibility:</strong> The client is solely responsible for the validity of the design, text, logos, images and other content. We are not responsible for copyright infringement.</li>
                <li><strong>Revisions:</strong> We provide limited revisions (1-2 times) for each service. Additional revisions may incur additional charges.</li>
                <li><strong>Confidentiality:</strong> We keep all information related to your business confidential and do not share it with any third party.</li>
                <li><strong>Rights:</strong> The final rights of the design/coding/graphics are transferred to the customer after delivery.</li>
                <li><strong>Refusal of Service:</strong> We reserve the right to refuse any service if the Content is illegal, offensive or objectionable.</li>
                <li><strong>Technical Support:</strong> Basic technical support will be provided for 7 days from the date of project delivery. Additional charges may be levied for support thereafter.</li>
            </ol>
        `);
    });
});