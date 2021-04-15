const navLinks = Array.from(document.querySelectorAll('.nav-link'));
const sections = document.querySelectorAll('section');

const nav = document.querySelector('.nav');
const btnHamburger = document.querySelector('.hamburger');

btnHamburger.addEventListener('click', () => {
  if(nav.classList.contains('open')){
    nav.classList.remove('open');
    document.querySelector('.wrapper').classList.remove('toggle');
  }
  else {
    nav.classList.add('open');
    document.querySelector('.wrapper').classList.add('toggle');
  }    
})

window.addEventListener("scroll", () => {
  let current = sections[0].getAttribute('id');

  sections.forEach((section, index) => {
    const sectionTop = section.offsetTop;
    
    if (pageYOffset >= sectionTop) {
      current = section.getAttribute("id");
    }
  });

  navLinks.forEach((link) => {
    if (link.classList.contains(current)) {
      link.classList.add("current-page");
    } else {
      link.classList.remove("current-page");
    }
  });
});

function readURL(input, e) {
  const imgView = document.querySelector(e);
  if(input.files && input.files[0]) { //input.files: Trả về FileList bao gồm các thông tin của file
      var reader = new FileReader(); //Đọc các thông tin của file

      reader.onload = function(e) {
          imgView.setAttribute('src', e.target.result); 
      }
      reader.readAsDataURL(input.files[0]); //fileReader.result sẽ là 1 URL
  }
}

//Plus
const btnPlus = document.querySelectorAll('.btn-plus');
var i = 7;

btnPlus.forEach((element) => {
  element.addEventListener('click', function() {

    if(element.parentNode.classList.value === 'research-title') {
      var node = document.createElement('div');
      
      node.innerHTML = `<i class="fas fa-trash-alt btn-trash"></i><div>New item</div>`;
      document.querySelector('.research-list').appendChild(node);

      node.childNodes[0].addEventListener('click', function() {
        node.childNodes[0].parentNode.remove();
      })

      node.childNodes[1].addEventListener('click', () => {
        node.childNodes[1].setAttribute('contenteditable', 'true');
        node.childNodes[1].style.cursor = 'auto';
        CKEDITOR.disableAutoInline = true;
        CKEDITOR.inline(node.childNodes[1],
        {
          startupFocus: true,
          allowedContent: true
        });
      })

      node.childNodes[1].addEventListener('blur', () => {
        node.childNodes[1].setAttribute('contenteditable', 'false');
        node.childNodes[1].style.cursor = 'move';
      })

    } else if (element.parentNode.classList.value === 'publication-title') {
      var node = document.createElement('div');
      
      node.innerHTML = `<i class="fas fa-trash-alt btn-trash"></i><div class="publication-year"><div contenteditable="true">2021</div><i class="fas fa-plus-circle btn-plus"></i></div><div class="publication-content" id="sortlist${i}"><div><i class="fas fa-trash-alt btn-trash"></i><div>Van-Quyet Nguyen, Huu-Duy Nguyen, Quyet-Thang Huynh, Nalini Venkatasubramanian, Kyungbaek Kim, "A Scalable Approach for Dynamic Evacuation Routing in Large Smart Buildings", In Proceedings of the Fifth International Conference on Smart Computing (SMARTCOMP 2019), June 12-14, 2019, Washington D.C., US. (to be appeared)</div></div><div><i class="fas fa-trash-alt btn-trash"></i><div>Van-Quyet Nguyen, Huu-Duy Nguyen, Quyet-Thang Huynh, Nalini Venkatasubramanian, Kyungbaek Kim, "A Scalable Approach for Dynamic Evacuation Routing in Large Smart Buildings", In Proceedings of the Fifth International Conference on Smart Computing (SMARTCOMP 2019), June 12-14, 2019, Washington D.C., US. (to be appeared)</div></div></div>`;

      node.childNodes[1].childNodes[0].addEventListener('click', () => {
        node.childNodes[1].childNodes[0].setAttribute('contenteditable', 'true');
        CKEDITOR.disableAutoInline = true;
        CKEDITOR.inline(node.childNodes[1].childNodes[0],
        {
          startupFocus: true,
          allowedContent: true
        });
      })

      node.childNodes[1].childNodes[0].addEventListener('blur', () => {
        node.childNodes[1].childNodes[0].setAttribute('contenteditable', 'false');
      })

      node.childNodes[0].addEventListener('click', function() {
        node.childNodes[0].parentNode.remove();
      })

      node.childNodes[2].childNodes.forEach((element) => {
        // console.log(element.childNodes[0]);
        element.childNodes[0].addEventListener('click', function() {
          element.childNodes[0].parentNode.remove();
        })
      })

      node.childNodes[1].childNodes[1].addEventListener('click', (element) => {
        var nodeChild = document.createElement('div');
        nodeChild.innerHTML = `<i class="fas fa-trash-alt btn-trash"></i><div>Van-Quyet Nguyen, Huu-Duy Nguyen, Quyet-Thang Huynh, Nalini Venkatasubramanian, Kyungbaek Kim, "A Scalable Approach for Dynamic Evacuation Routing in Large Smart Buildings", In Proceedings of the Fifth International Conference on Smart Computing (SMARTCOMP 2019), June 12-14, 2019, Washington D.C., US. (to be appeared)</div>`;

        node.childNodes[2].appendChild(nodeChild);

        node.childNodes[2].childNodes.forEach((element) => {
            element.childNodes[0].addEventListener('click', () => {
              element.childNodes[0].parentNode.remove();
            })
        })

        nodeChild.childNodes[1].addEventListener('click', () => {
          nodeChild.childNodes[1].setAttribute('contenteditable', 'true');
          nodeChild.childNodes[1].style.cursor = 'auto';
          CKEDITOR.disableAutoInline = true;
          CKEDITOR.inline(nodeChild.childNodes[1],
          {
            startupFocus: true,
            allowedContent: true
          });
        })

        nodeChild.childNodes[1].addEventListener('blur', () => {
          nodeChild.childNodes[1].setAttribute('contenteditable', 'false');
          nodeChild.childNodes[1].style.cursor = 'move';
        })
      })

      node.childNodes[2].childNodes.forEach((element) => {
        element.childNodes[1].addEventListener('click', () => {
          element.childNodes[1].setAttribute('contenteditable', 'true');
          element.childNodes[1].style.cursor = 'auto';
          CKEDITOR.disableAutoInline = true;
          CKEDITOR.inline(element.childNodes[1],
          {
            startupFocus: true,
            allowedContent: true
          });
        })
  
        element.childNodes[1].addEventListener('blur', () => {
          element.childNodes[1].setAttribute('contenteditable', 'false');
          element.childNodes[1].style.cursor = 'move';
        })
      })
      document.querySelector('.publication-list').appendChild(node);
      
      new Sortable(node.childNodes[2], {
        animation: 150
      });

      i++;
    } else if (element.parentNode.classList.value === 'teaching-title') {
      var node = document.createElement('div');
      
      node.innerHTML = `<i class="fas fa-trash-alt btn-trash"></i><div class="teaching-year"><div contenteditable="true">2018 - 2019</div><i class="fas fa-plus-circle btn-plus"></i></div><div class="teaching-content" id="sortlist${i}"><div><i class="fas fa-trash-alt btn-trash"></i><div>IT5630 - Advanced Project Management</div></div><div><i class="fas fa-trash-alt btn-trash"></i><div>IT5630 - Advanced Project Management</div></div></div>`;

      node.childNodes[1].childNodes[0].addEventListener('click', () => {
        node.childNodes[1].childNodes[0].setAttribute('contenteditable', 'true');
        CKEDITOR.disableAutoInline = true;
        CKEDITOR.inline(node.childNodes[1].childNodes[0],
        {
          startupFocus: true,
          allowedContent: true
        });
      })

      node.childNodes[1].childNodes[0].addEventListener('blur', () => {
        node.childNodes[1].childNodes[0].setAttribute('contenteditable', 'false');
      })

      node.childNodes[0].addEventListener('click', function() {
        node.childNodes[0].parentNode.remove();
      })

      node.childNodes[2].childNodes.forEach((element) => {
        element.childNodes[0].addEventListener('click', function() {
          element.childNodes[0].parentNode.remove();
        })
      })

      node.childNodes[1].childNodes[1].addEventListener('click', (element) => {
        var nodeChild = document.createElement('div');
        nodeChild.innerHTML = `<i class="fas fa-trash-alt btn-trash"></i><div>IT5630 - Advanced Project Management</div>`;

        node.childNodes[2].appendChild(nodeChild);

        node.childNodes[2].childNodes.forEach((element) => {
            element.childNodes[0].addEventListener('click', () => {
              element.childNodes[0].parentNode.remove();
            })
        })

        nodeChild.childNodes[1].addEventListener('click', () => {
          nodeChild.childNodes[1].setAttribute('contenteditable', 'true');
          nodeChild.childNodes[1].style.cursor = 'auto';
          CKEDITOR.disableAutoInline = true;
          CKEDITOR.inline(nodeChild.childNodes[1],
          {
            startupFocus: true,
            allowedContent: true
          });
        })

        nodeChild.childNodes[1].addEventListener('blur', () => {
          nodeChild.childNodes[1].setAttribute('contenteditable', 'false');
          nodeChild.childNodes[1].style.cursor = 'move';
        })
      })

      node.childNodes[2].childNodes.forEach((element) => {
        element.childNodes[1].addEventListener('click', () => {
          element.childNodes[1].setAttribute('contenteditable', 'true');
          element.childNodes[1].style.cursor = 'auto';
          CKEDITOR.disableAutoInline = true;
          CKEDITOR.inline(element.childNodes[1],
          {
            startupFocus: true,
            allowedContent: true
          });
        })
  
        element.childNodes[1].addEventListener('blur', () => {
          element.childNodes[1].setAttribute('contenteditable', 'false');
          element.childNodes[1].style.cursor = 'move';
        })
      })
      document.querySelector('.teaching-list').appendChild(node);
      
      new Sortable(node.childNodes[2], {
        animation: 150
      });

      i++;
    } else if (element.parentNode.classList.value === 'thesis-title') {
      var node = document.createElement('div');
      
      node.innerHTML = `<i class="fas fa-trash-alt btn-trash"></i><div class="thesis-year"><div contenteditable="true">Phd Thesis Supervised</div><i class="fas fa-plus-circle btn-plus"></i></div><div class="thesis-content"><div><i class="fas fa-trash-alt btn-trash"></i><div>Pham Thi Quynh (2007-2010): Measurement and checking Web service and business process</div> </div><div><i class="fas fa-trash-alt btn-trash"></i><div>Nguyen Minh Quy (10/2010-10/2014): Performance Analysis of Parallel Computing Architectures</div> </div></div>`;

      node.childNodes[1].childNodes[0].addEventListener('click', () => {
        node.childNodes[1].childNodes[0].setAttribute('contenteditable', 'true');
        CKEDITOR.disableAutoInline = true;
        CKEDITOR.inline(node.childNodes[1].childNodes[0],
        {
          startupFocus: true,
          allowedContent: true
        });
      })

      node.childNodes[1].childNodes[0].addEventListener('blur', () => {
        node.childNodes[1].childNodes[0].setAttribute('contenteditable', 'false');
      })

      node.childNodes[0].addEventListener('click', function() {
        node.childNodes[0].parentNode.remove();
      })

      node.childNodes[2].childNodes.forEach((element) => {
        element.childNodes[0].addEventListener('click', function() {
          element.childNodes[0].parentNode.remove();
        })
      })

      node.childNodes[1].childNodes[1].addEventListener('click', (element) => {
        var nodeChild = document.createElement('div');
        nodeChild.innerHTML = `<i class="fas fa-trash-alt btn-trash"></i><div>Pham Thi Quynh (2007-2010): Measurement and checking Web service and business process</div> `;

        node.childNodes[2].appendChild(nodeChild);

        node.childNodes[2].childNodes.forEach((element) => {
            element.childNodes[0].addEventListener('click', () => {
              element.childNodes[0].parentNode.remove();
            })
        })

        nodeChild.childNodes[1].addEventListener('click', () => {
          nodeChild.childNodes[1].setAttribute('contenteditable', 'true');
          nodeChild.childNodes[1].style.cursor = 'auto';
          CKEDITOR.disableAutoInline = true;
          CKEDITOR.inline(nodeChild.childNodes[1],
          {
            startupFocus: true,
            allowedContent: true
          });
        })

        nodeChild.childNodes[1].addEventListener('blur', () => {
          nodeChild.childNodes[1].setAttribute('contenteditable', 'false');
          nodeChild.childNodes[1].style.cursor = 'move';
        })
      })

      node.childNodes[2].childNodes.forEach((element) => {
        element.childNodes[1].addEventListener('click', () => {
          element.childNodes[1].setAttribute('contenteditable', 'true');
          element.childNodes[1].style.cursor = 'auto';
          CKEDITOR.disableAutoInline = true;
          CKEDITOR.inline(element.childNodes[1],
          {
            startupFocus: true,
            allowedContent: true
          });
        })
  
        element.childNodes[1].addEventListener('blur', () => {
          element.childNodes[1].setAttribute('contenteditable', 'false');
          element.childNodes[1].style.cursor = 'move';
        })
      })
      document.querySelector('.thesis-list').appendChild(node);
      
      new Sortable(node.childNodes[2], {
        animation: 150
      });

      i++;
    } else if(element.parentNode.classList.value === 'publication-year') {
        var node = document.createElement('div');
        node.innerHTML = `<i class="fas fa-trash-alt btn-trash"></i><div>Van-Quyet Nguyen, Huu-Duy Nguyen, Quyet-Thang Huynh, Nalini Venkatasubramanian, Kyungbaek Kim, "A Scalable Approach for Dynamic Evacuation Routing in Large Smart Buildings", In Proceedings of the Fifth International Conference on Smart Computing (SMARTCOMP 2019), June 12-14, 2019, Washington D.C., US. (to be appeared)</div>`;
  
        document.querySelector('.publication-content').appendChild(node);
        
        node.childNodes[0].addEventListener('click', function() {
          node.childNodes[0].parentNode.remove();
        })

        node.childNodes[1].addEventListener('click', () => {
          node.childNodes[1].setAttribute('contenteditable', 'true');
          node.childNodes[1].style.cursor = 'auto';
          CKEDITOR.disableAutoInline = true;
          CKEDITOR.inline(node.childNodes[1],
          {
            startupFocus: true,
            allowedContent: true
          });
        })
  
        node.childNodes[1].addEventListener('blur', () => {
          node.childNodes[1].setAttribute('contenteditable', 'false');
          node.childNodes[1].style.cursor = 'move';
        })

    } else if(element.parentNode.classList.value === 'teaching-year') {
      var node = document.createElement('div');
      node.innerHTML = `<i class="fas fa-trash-alt btn-trash"></i><div>IT5630 - Advanced Project Management</div>`;

      document.querySelector('.teaching-content').appendChild(node);
      console.log(node.childNodes);
      node.childNodes[0].addEventListener('click', function() {
        node.childNodes[0].parentNode.remove();
      })

      node.childNodes[1].addEventListener('click', () => {
        node.childNodes[1].setAttribute('contenteditable', 'true');
        node.childNodes[1].style.cursor = 'auto';
        CKEDITOR.disableAutoInline = true;
        CKEDITOR.inline(node.childNodes[1],
        {
          startupFocus: true,
          allowedContent: true
        });
      })

      node.childNodes[1].addEventListener('blur', () => {
        node.childNodes[1].setAttribute('contenteditable', 'false');
        node.childNodes[1].style.cursor = 'move';
      })

    } else if(element.parentNode.classList.value === 'thesis-year') {
      var node = document.createElement('div');
      node.innerHTML = `<i class="fas fa-trash-alt btn-trash"></i><div>Pham Thi Quynh (2007-2010): Measurement and checking Web service and business process</div> `;

      document.querySelector('.thesis-content').appendChild(node);
      console.log(node.childNodes);
      node.childNodes[0].addEventListener('click', function() {
        node.childNodes[0].parentNode.remove();
      })

      node.childNodes[1].addEventListener('click', () => {
        node.childNodes[1].setAttribute('contenteditable', 'true');
        node.childNodes[1].style.cursor = 'auto';
        CKEDITOR.disableAutoInline = true;
        CKEDITOR.inline(node.childNodes[1],
        {
          startupFocus: true,
          allowedContent: true
        });
      })

      node.childNodes[1].addEventListener('blur', () => {
        node.childNodes[1].setAttribute('contenteditable', 'false');
        node.childNodes[1].style.cursor = 'move';
      })
    } else if(element.parentNode.classList.value === 'work-list') {
      var node = document.createElement('div');
      
      node.innerHTML = `<i class="fas fa-trash-alt btn-trash"></i><div>New item</div>`;
      document.querySelector('.list').appendChild(node);

      node.childNodes[0].addEventListener('click', function() {
        node.childNodes[0].parentNode.remove();
      })

      node.childNodes[1].addEventListener('click', () => {
        node.childNodes[1].setAttribute('contenteditable', 'true');
        node.childNodes[1].style.cursor = 'auto';
        CKEDITOR.disableAutoInline = true;
        CKEDITOR.inline(node.childNodes[1],
        {
          startupFocus: true,
          allowedContent: true
        });
      })

      node.childNodes[1].addEventListener('blur', () => {
        node.childNodes[1].setAttribute('contenteditable', 'false');
        node.childNodes[1].style.cursor = 'move';
      })

    } else if(element.parentNode.classList.value === 'academic-title') {
      var node = document.createElement('div');
      node.setAttribute('class', 'academic-item');
      
      node.innerHTML = `<i class="fas fa-trash-alt btn-trash mg-top"></i>
                        <div>
                            <div class="academic-item-name">VARNA TECHNICAL UNIVERSITY,</div> <div class="academic-item-location">BULGARIA</div>
                            <div class="academic-level">PHD DEGREE IN INFORMATION AND COMPUTER SCIENCES</div>
                            <div class="academic-description">PhD thesis: Architectural model of a class numerical computing machine and its application on generating smooth curves and surface</div>
                        </div>

                        <div>
                            <div class="academic-item-time">3/1991 - 12/1995</div>
                        </div>`;

      document.querySelector('.academic-list').appendChild(node);
      node.childNodes[0].addEventListener('click', function() {
        node.childNodes[0].parentNode.remove();
      })

      node.childNodes[2].childNodes.forEach((element) => {
        element.addEventListener('click', (e) => {
          element.setAttribute('contenteditable', 'true');
          CKEDITOR.disableAutoInline = true;
          CKEDITOR.inline(element,
            {
              startupFocus: true,
              allowedContent: true
            });
        }) 
    
        element.addEventListener('blur', () => {
          element.setAttribute('contenteditable', 'false');
        })
      })

      node.childNodes[4].childNodes[1].addEventListener('click', () => {
        node.childNodes[4].childNodes[1].setAttribute('contenteditable', 'true');
        CKEDITOR.inline(node.childNodes[4].childNodes[1],
          {
            startupFocus: true
          });
      })

      node.childNodes[4].childNodes[1].addEventListener('blur', () => {
        node.childNodes[4].childNodes[1].setAttribute('contenteditable', 'false');
      })
    } else if(element.parentNode.classList.value === 'thesis-link-title') {
      var node = document.createElement('div');
      
      node.innerHTML = `<i class="fas fa-trash-alt btn-trash"></i><div>Proposed Topics for Undergraduate (2018-2019)</div>`;
      document.querySelector('.thesis-link-list').appendChild(node);

      node.childNodes[0].addEventListener('click', function() {
        node.childNodes[0].parentNode.remove();
      })

      node.childNodes[1].addEventListener('click', () => {
        node.childNodes[1].setAttribute('contenteditable', 'true');
        node.childNodes[1].style.cursor = 'auto';
        CKEDITOR.disableAutoInline = true;
        CKEDITOR.inline(node.childNodes[1],
        {
          startupFocus: true,
          allowedContent: true
        });
      })

      node.childNodes[1].addEventListener('blur', () => {
        node.childNodes[1].setAttribute('contenteditable', 'false');
        node.childNodes[1].style.cursor = 'move';
      })

    } else if(element.parentNode.classList.value === 'grant-title') {
      var node = document.createElement('div');
      
      node.innerHTML = `<i class="fas fa-trash-alt btn-trash"></i><div>New item</div>`;
      document.querySelector('.grant-list').appendChild(node);

      node.childNodes[0].addEventListener('click', function() {
        node.childNodes[0].parentNode.remove();
      })

      node.childNodes[1].addEventListener('click', () => {
        node.childNodes[1].setAttribute('contenteditable', 'true');
        node.childNodes[1].style.cursor = 'auto';
        CKEDITOR.disableAutoInline = true;
        CKEDITOR.inline(node.childNodes[1],
        {
          startupFocus: true,
          allowedContent: true
        });
      })

      node.childNodes[1].addEventListener('blur', () => {
        node.childNodes[1].setAttribute('contenteditable', 'false');
        node.childNodes[1].style.cursor = 'move';
      })

    }
  })
})

// Trash
const trashBtn = document.querySelectorAll('.btn-trash');
trashBtn.forEach((element) => {
  element.addEventListener('click', function() {
      element.parentNode.remove();
  })
})

const divs = document.querySelectorAll('div');
divs.forEach((element) => {
  if(element.parentNode.parentNode.classList.value === 'research-list') {
    element.addEventListener('click', (e) => {
      
      element.setAttribute('contenteditable', 'true');
      element.style.cursor = 'auto';
      CKEDITOR.disableAutoInline = true;
      CKEDITOR.inline(element,
        {
          startupFocus: true,
          allowedContent: true
        });
    }) 

    element.addEventListener('blur', () => {
      element.setAttribute('contenteditable', 'false');
      element.style.cursor = 'move';
    })
  } else if(element.parentNode.parentNode.classList.value === 'publication-content') {

    element.addEventListener('click', (e) => {
      element.setAttribute('contenteditable', 'true');
      element.style.cursor = 'auto';
      CKEDITOR.disableAutoInline = true;
      CKEDITOR.inline(element,
        {
          startupFocus: true,
          allowedContent: true
        });
    }) 

    element.addEventListener('blur', () => {
      element.setAttribute('contenteditable', 'false');
      element.style.cursor = 'move';
    })
  } else if(element.parentNode.parentNode.classList.value === 'teaching-content') {

    element.addEventListener('click', (e) => {
      element.setAttribute('contenteditable', 'true');
      element.style.cursor = 'auto';
      CKEDITOR.disableAutoInline = true;
      CKEDITOR.inline(element,
        {
          startupFocus: true,
          allowedContent: true
        });
    }) 

    element.addEventListener('blur', () => {
      element.setAttribute('contenteditable', 'false');
      element.style.cursor = 'move';
    })
  } else if(element.parentNode.parentNode.classList.value === 'work-list') {
    element.childNodes[3].addEventListener('click', (e) => {
      element.childNodes[3].setAttribute('contenteditable', 'true');
      element.childNodes[3].style.cursor = 'auto';
      CKEDITOR.disableAutoInline = true;
      CKEDITOR.inline(element.childNodes[3],
        {
          startupFocus: true,
          allowedContent: true
        });
    }) 

    element.childNodes[3].addEventListener('blur', () => {
      element.childNodes[3].setAttribute('contenteditable', 'false');
      element.childNodes[3].style.cursor = 'move';
    })
  } else if(element.parentNode.parentNode.classList.value === 'academic-item') {
    element.addEventListener('click', (e) => {
      element.setAttribute('contenteditable', 'true');
      CKEDITOR.disableAutoInline = true;
      CKEDITOR.inline(element,
        {
          startupFocus: true,
          allowedContent: true
        });
    }) 

    element.addEventListener('blur', () => {
      element.setAttribute('contenteditable', 'false');
    })
  } else if(element.parentNode.parentNode.classList.value === 'thesis-link-list') {
    element.addEventListener('click', (e) => {
      
      element.setAttribute('contenteditable', 'true');
      element.style.cursor = 'auto';
      CKEDITOR.disableAutoInline = true;
      CKEDITOR.inline(element,
        {
          startupFocus: true,
          allowedContent: true
        });
    }) 

    element.addEventListener('blur', () => {
      element.setAttribute('contenteditable', 'false');
      element.style.cursor = 'move';
    })
  } else if(element.parentNode.parentNode.classList.value === 'thesis-content') {

    element.addEventListener('click', (e) => {
      element.setAttribute('contenteditable', 'true');
      element.style.cursor = 'auto';
      CKEDITOR.disableAutoInline = true;
      CKEDITOR.inline(element,
        {
          startupFocus: true,
          allowedContent: true
        });
    }) 

    element.addEventListener('blur', () => {
      element.setAttribute('contenteditable', 'false');
      element.style.cursor = 'move';
    })
  } else if(element.parentNode.parentNode.classList.value === 'grant-list') {
    element.addEventListener('click', (e) => {
      
      element.setAttribute('contenteditable', 'true');
      element.style.cursor = 'auto';
      CKEDITOR.disableAutoInline = true;
      CKEDITOR.inline(element,
        {
          startupFocus: true,
          allowedContent: true
        });
    }) 

    element.addEventListener('blur', () => {
      element.setAttribute('contenteditable', 'false');
      element.style.cursor = 'move';
    })
  }
})

//Sortable
$('.sortlist').sortable({
  animation: 150
});

new Sortable(sortlist1, {
  animation: 150
})

new Sortable(sortlist2, {
  animation: 150
})

new Sortable(sortlist3, {
  animation: 150
})

new Sortable(sortlist4, {
  animation: 150
})

new Sortable(sortlist5, {
  animation: 150
})

new Sortable(sortlist6, {
  animation: 150
})







