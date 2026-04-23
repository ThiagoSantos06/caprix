import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { AccordionModule } from 'primeng/accordion';

@Component({
  selector: 'app-faq',
  imports: [AccordionModule, CommonModule],
  templateUrl: './faq.html',
  styleUrl: './faq.scss',
})
export class Faq {
  servicos = [
    { id: '0', titulo: 'Você leva o produto de limpeza?', descricao: 'Não levo produtos. Trabalho com os produtos da sua casa, assim mantenho o padrão que você já gosta e está acostumada a usar.' },
    { id: '1', titulo: 'Preciso estar em casa durante a faxina?', descricao: 'Pode ser combinado com você, mas normalmente os clientes combinam um horário para ir até a casa, me entregam a chave e eu realizo o serviço com total confiança e responsabilidade.' },
    { id: '2', titulo: 'Você limpa janelas e vidros?', descricao: 'Sim! Limpeza de janelas e vidros está inclusa no serviço.' },
    { id: '3', titulo: 'Você limpa móveis por dentro? (armários e geladeira?)', descricao: 'Não. Não faço limpeza interna de móveis como armários e geladeira. faço apenas a limpeza externa.' },
    { id: '4', titulo: 'Como funciona o orçamento?', descricao: 'É gratuito e sem compromisso! Basta entrar em contato pelo WhatsApp informando o tamanho do imóvel, quantidade de cômodos e tipo de limpeza desejada. Respondo rapidamente com o valor.' },
    { id: '5', titulo: 'Quanto tempo demora uma faxina?', descricao: 'Depende do tamanho do imóvel e do tipo de limpeza. Trabalho no máximo 8 horas por dia, então em imóveis maiores ou com limpeza pesada o serviço pode ser dividido em mais de um dia.' },
    { id: '6', titulo: 'Quais formas de pagamento?', descricao: 'Aceito Pix, dinheiro e cartão. O pagamento é feito após a conclusão do serviço, quando você estiver satisfeita com o resultado.' },
    { id: '7', titulo: 'E se eu precisar remarcar?', descricao: 'Sem problemas! Basta avisar com pelo menos 24 horas de antecedência pelo WhatsApp e remarcamos para outro dia da semana.' },
    { id: '8', titulo: 'Atende fora de Niterói?', descricao: 'O atendimento principal é em Niterói e bairros próximos. Para regiões mais distantes, podemos conversar (pode haver uma taxa adicional de deslocamento).' },
  ];
}
