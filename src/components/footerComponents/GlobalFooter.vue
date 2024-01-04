<style scoped>
footer {
    background-color: #f8f8f8;
}
</style>

<template>
    <footer class="footer">
        <div class="container py-5">
            <div class="row">
                <div class="col-12 col-md">
                    <small class="d-block mb-3 text-body-secondary">© 2017–2024</small>
                </div>
                <div class="col-6 col-md">
                    <h5>Features</h5>
                    <ul class="list-unstyled text-small">
                        <li><a class="link-secondary text-decoration-none" href="#">Home Page</a></li>
                        <li><a class="link-secondary text-decoration-none" href="#">Furnitures</a></li>
                        <li><a class="link-secondary text-decoration-none" href="#">Our Services</a></li>
                        <li><a class="link-secondary text-decoration-none" href="#">Create an account</a></li>
                        <li><a class="link-secondary text-decoration-none" href="#">Login</a></li>
                        <li><a class="link-secondary text-decoration-none" href="#">Github</a></li>
                    </ul>
                </div>

                <div class="col-6 col-md">
                    <h5>Resources</h5>
                    <ul class="list-unstyled text-small">
                        <li><a class="link-secondary text-decoration-none" href="#">Business</a></li>
                        <li><a class="link-secondary text-decoration-none" href="#">Education</a></li>
                        <li><a class="link-secondary text-decoration-none" href="#">Government</a></li>
                        <li><a class="link-secondary text-decoration-none" href="#">Gaming</a></li>
                    </ul>
                </div>

                <div class="col-6 col-md">
                    <h5>About Us</h5>
                    <ul class="list-unstyled text-small">
                        <li><a class="link-secondary text-decoration-none" href="#">About us</a></li>
                        <li><a class="link-secondary text-decoration-none" href="#">What we do</a></li>
                        <li><a class="link-secondary text-decoration-none" href="#">FAQ Page</a></li>
                        <li><a class="link-secondary text-decoration-none" href="#">Contact Us</a></li>
                    </ul>
                </div>
                <div class="col-6 col-md">
                    <h5>Policy & Terms</h5>
                    <ul class="list-unstyled text-small">
                        <li><a class="link-secondary text-decoration-none" href="#">Terms & Condition</a></li>
                        <li><a class="link-secondary text-decoration-none" href="#">Privacy Policy</a></li>
                        <li><a class="link-secondary text-decoration-none" href="#">Our Store</a></li>
                        <li><a class="link-secondary text-decoration-none" href="#">Shopping Guide</a></li>
                    </ul>
                </div>
            </div>

            <div class="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
                <div class="col-md-4 d-flex align-items-center">
                    <span class="mb-3 mb-md-0 text-body-secondary">© 2024 Homello, Inc</span>
                </div>

                <ul class="nav col-md-4 justify-content-end list-unstyled d-flex color-dark">
                    <li class="ms-3"><a class="text-body-secondary" href="#">
                            <span class="bi bi-github"></span>
                        </a></li>
                    <li class="ms-3"><a class="text-body-secondary" href="#"><span class="bi bi-twitter"></span></a></li>
                    <li class="ms-3"><a class="text-body-secondary" href="#"><span class="bi bi-instagram"></span></a></li>
                    <li class="ms-3"><a class="text-body-secondary" href="#">
                            <span class="bi bi-facebook"></span>
                        </a></li>
                </ul>
            </div>
        </div>
    </footer>
</template>

<script>
export default {
    name: "GlobalFooter",
    data() {
        return {
        }
    }
}
</script>