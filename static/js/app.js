/**
 * ZeroDowntime Journal - Core JavaScript Interactions
 */

document.addEventListener('DOMContentLoaded', () => {
  console.log('ZeroDowntime Journal Initialized successfully.');

  // 1. Auto-dismiss Flash Alerts
  const flashAlerts = document.querySelectorAll('.flash-alert');
  flashAlerts.forEach(alert => {
    // Set a timer to automatically fade out the banner after 5 seconds
    setTimeout(() => {
      alert.style.opacity = '0';
      alert.style.transform = 'translateX(120px)';
      alert.style.transition = 'all 0.6s cubic-bezier(0.16, 1, 0.3, 1)';
      
      // Remove element from DOM after transition completes
      setTimeout(() => {
        alert.remove();
      }, 600);
    }, 5000);

    // Dismiss manually on click
    alert.addEventListener('click', () => {
      alert.style.opacity = '0';
      alert.style.transform = 'translateX(120px)';
      setTimeout(() => alert.remove(), 600);
    });
  });

  // 2. Interactive Image Upload Zone and Previews
  const fileDropZone = document.getElementById('file-drop-zone');
  const fileInput = document.getElementById('post-image-file-input');
  const previewWrapper = document.getElementById('image-upload-preview-wrapper');
  const previewImg = document.getElementById('image-upload-preview');
  const removePreviewBtn = document.getElementById('btn-remove-image-preview');
  const imageUrlInput = document.getElementById('post-image-url-input');

  if (fileDropZone && fileInput) {
    // Open file chooser on zone click
    fileDropZone.addEventListener('click', () => {
      fileInput.click();
    });

    // Drag-over styling
    ['dragenter', 'dragover'].forEach(eventName => {
      fileDropZone.addEventListener(eventName, (e) => {
        e.preventDefault();
        fileDropZone.style.borderColor = 'var(--accent-cyan)';
        fileDropZone.style.background = 'rgba(6, 182, 212, 0.05)';
      }, false);
    });

    ['dragleave', 'drop'].forEach(eventName => {
      fileDropZone.addEventListener(eventName, (e) => {
        e.preventDefault();
        fileDropZone.style.borderColor = 'var(--border-glass)';
        fileDropZone.style.background = 'rgba(0, 0, 0, 0.15)';
      }, false);
    });

    // Drop files handler
    fileDropZone.addEventListener('drop', (e) => {
      const dt = e.dataTransfer;
      const files = dt.files;

      if (files.length > 0) {
        fileInput.files = files;
        handleImagePreview(files[0]);
      }
    });

    // File selection changes handler
    fileInput.addEventListener('change', (e) => {
      if (fileInput.files && fileInput.files[0]) {
        handleImagePreview(fileInput.files[0]);
      }
    });
  }

  // Handle image preview rendering
  function handleImagePreview(file) {
    if (!file.type.startsWith('image/')){ return; }

    const reader = new FileReader();
    reader.onload = (e) => {
      previewImg.src = e.target.result;
      previewWrapper.style.display = 'flex';
      fileDropZone.style.display = 'none';
      
      // Clear manual image url to prioritize uploaded file
      if (imageUrlInput) {
        imageUrlInput.value = '';
      }
    };
    reader.readAsDataURL(file);
  }

  // Remove uploaded preview handler
  if (removePreviewBtn) {
    removePreviewBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      fileInput.value = ''; // clear input
      previewImg.src = '';
      previewWrapper.style.display = 'none';
      fileDropZone.style.display = 'flex';
    });
  }

  // 3. Confirm Delete Prompts
  const deleteForms = document.querySelectorAll('.delete-action-btn');
  deleteForms.forEach(button => {
    const form = button.closest('form');
    if (form) {
      form.addEventListener('submit', (e) => {
        const confirmMsg = form.dataset.confirm || "Tem certeza de que deseja excluir esta postagem?";
        if (!confirm(confirmMsg)) {
          e.preventDefault();
        }
      });
    }
  });

  // 4. Highlight Active Navigation Menu
  const currentPath = window.location.pathname;
  const navLinks = document.querySelectorAll('.nav-link');
  navLinks.forEach(link => {
    const href = link.getAttribute('href');
    if (href === currentPath) {
      link.style.color = 'var(--text-primary)';
      link.style.background = 'rgba(255, 255, 255, 0.05)';
      link.style.borderColor = 'var(--border-glass)';
    }
  });
});
